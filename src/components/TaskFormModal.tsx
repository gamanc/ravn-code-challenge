import { useEffect, useRef } from "react";
import {
  Box,
  Button,
  IconButton,
  Modal,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import TaskForm, { TaskFormData } from "./TaskForm";
import { FormProvider, useForm } from "react-hook-form";
import { TASK_FORM_DEFAULT_VALUES } from "../constants/tasks";
import { Status, TaskTag } from "../gql/graphql";

import { useCreateTask } from "../services/tasks/hooks";

const TaskFormModal = () => {
  const { createTask, result } = useCreateTask();

  const { loading } = result;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  const methods = useForm<TaskFormData>({
    mode: "onChange",
    defaultValues: TASK_FORM_DEFAULT_VALUES,
  });

  const onFormSubmit = (formData: TaskFormData) => {
    const { taskName, tags, assignee, dueDate, pointEstimate } = formData;

    const tagsData = tags.map((tag) => tag.value) as TaskTag[];

    createTask({
      variables: {
        input: {
          name: taskName,
          tags: tagsData,
          assigneeId: assignee,
          dueDate: dueDate?.toISOString(),
          pointEstimate,
          status: Status.Backlog,
        },
      },
    });

    onClose();
  };

  const { isValid, isSubmitSuccessful } = methods.formState;

  useEffect(() => {
    if (isSubmitSuccessful) methods.reset();
  }, [isSubmitSuccessful]);

  const handleClose = () => {
    methods.reset();
    onClose();
  };

  return (
    <>
      <IconButton
        aria-label="Add task"
        bg="primary.400"
        _hover={{ bg: "primary.300" }}
        _active={{ bg: "primary.200" }}
        icon={<AddIcon />}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={handleClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onFormSubmit)}>
            <ModalContent minWidth="fit-content" height="fit-content">
              <Box p={8} w="lg">
                <TaskForm />
              </Box>

              <ModalFooter>
                <Button ref={cancelRef} onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  ml={3}
                  type="submit"
                  isDisabled={!isValid}
                  isLoading={loading}
                >
                  Save
                </Button>
              </ModalFooter>
            </ModalContent>
          </form>
        </FormProvider>
      </Modal>
    </>
  );
};

export default TaskFormModal;
