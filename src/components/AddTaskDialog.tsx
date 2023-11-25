import { useRef } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Box,
  Button,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import TaskForm, { TaskFormData } from "./TaskForm";
import { FormProvider, useForm } from "react-hook-form";
import { TASK_FORM_DEFAULT_VALUES } from "../constants/tasks";
import { useMutation } from "@apollo/client";
import { CREATE_TASK_MUTATION, TASKS_QUERY } from "../queries/taskQuerys";
import { Status, TaskTag } from "../gql/graphql";

const AddTaskDialog = () => {
  const [createTask, { loading }] = useMutation(CREATE_TASK_MUTATION, {
    update: (cache, { data }) => {
      if (data?.createTask) {
        const cacheData = cache.readQuery({
          query: TASKS_QUERY,
          variables: { input: {} },
        });
        if (cacheData) {
          cache.writeQuery({
            query: TASKS_QUERY,
            variables: { input: {} },
            data: { tasks: cacheData.tasks.concat(data.createTask) },
          });
        }
      }
    },
  });

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

  const { isValid } = methods.formState;

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
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={handleClose}
      >
        <AlertDialogOverlay>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onFormSubmit)}>
              <AlertDialogContent minWidth="fit-content" height="fit-content">
                <Box p={8} w="lg">
                  <TaskForm />
                </Box>

                <AlertDialogFooter>
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
                </AlertDialogFooter>
              </AlertDialogContent>
            </form>
          </FormProvider>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default AddTaskDialog;
