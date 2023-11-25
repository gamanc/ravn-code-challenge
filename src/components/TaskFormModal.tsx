import { ReactNode, useEffect } from "react";
import {
  Box,
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import TaskForm, { TaskFormData } from "./TaskForm";
import { FormProvider, useForm } from "react-hook-form";
import { TASK_FORM_DEFAULT_VALUES } from "../constants/tasks";
import { Status, TaskTag } from "../gql/graphql";

import { useCreateTask } from "../services/tasks/hooks";

interface Props {
  triggerElement: ReactNode;
  isModalOpen: boolean;
  onOpenModal: () => void;
  onCloseModal: () => void;
}

const TaskFormModal = ({
  triggerElement,
  isModalOpen,
  onCloseModal,
}: Props) => {
  const { createTask, result } = useCreateTask();

  const { loading } = result;

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

    onCloseModal();
  };

  const { isValid, isSubmitSuccessful } = methods.formState;

  useEffect(() => {
    if (isSubmitSuccessful) methods.reset();
  }, [isSubmitSuccessful]);

  const handleClose = () => {
    methods.reset();
    onCloseModal();
  };

  return (
    <>
      {triggerElement}
      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onFormSubmit)}>
            <ModalContent minWidth="fit-content" height="fit-content">
              <Box p={8} w="lg">
                <TaskForm />
              </Box>

              <ModalFooter>
                <Button onClick={handleClose}>Cancel</Button>
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
