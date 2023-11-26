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
import { TASK_FORM_DEFAULT_VALUES, getTaskTagName } from "../constants/tasks";
import { Status, Task, TaskTag } from "../gql/graphql";

import { useSaveTask } from "../services/tasks/hooks";

interface Props {
  triggerElement: ReactNode;
  isModalOpen: boolean;
  onOpenModal: () => void;
  onCloseModal: () => void;
  task?: Partial<Task>;
}

const TaskFormModal = ({
  triggerElement,
  isModalOpen,
  onCloseModal,
  task,
}: Props) => {
  const { saveTask, result } = useSaveTask(task?.id);

  const { loading } = result;

  const methods = useForm<TaskFormData>({
    mode: "onChange",
    defaultValues: task
      ? {
          taskName: task.name,
          assignee: task.assignee?.id,
          tags: task.tags!.map((tag) => ({
            label: getTaskTagName(tag),
            value: tag,
          })),
          dueDate: new Date(task.dueDate),
          pointEstimate: task.pointEstimate,
        }
      : TASK_FORM_DEFAULT_VALUES,
  });

  const onFormSubmit = (formData: TaskFormData) => {
    const { taskName, tags, assignee, dueDate, pointEstimate } = formData;

    const tagsData = tags.map((tag) => tag.value) as TaskTag[];

    saveTask({
      variables: {
        input: {
          id: task?.id!,
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
                  {!task ? "Create" : "Update"}
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
