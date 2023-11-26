import { useMutation, useQuery } from "@apollo/client";
import { TASKS_QUERY } from "./graphqlQueries";
import {
  CREATE_TASK_MUTATION,
  DELETE_TASK_MUTATION,
  UPDATE_TASK_MUTATION,
} from "./graphqlMutations";

export const useAllTasks = () => {
  const result = useQuery(TASKS_QUERY, {
    variables: { input: {} },
  });

  return result;
};

export const useSaveTask = (taskId?: string) => {
  const [createTask, createResult] = useMutation(CREATE_TASK_MUTATION, {
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

  const [updateTask, updateResult] = useMutation(UPDATE_TASK_MUTATION, {
    update: (cache, { data }) => {
      if (data?.updateTask) {
        const cacheData = cache.readQuery({
          query: TASKS_QUERY,
          variables: { input: {} },
        });
        if (cacheData) {
          const newTags = cacheData.tasks.filter((task) => task.id !== taskId);
          cache.writeQuery({
            query: TASKS_QUERY,
            variables: { input: {} },
            data: { tasks: newTags.concat(data.updateTask) },
          });
        }
      }
    },
  });

  if (taskId) {
    return { saveTask: updateTask, result: updateResult };
  }
  return { saveTask: createTask, result: createResult };
};

export const useDeleteTask = (taskId: string) => {
  const [deleteTask, result] = useMutation(DELETE_TASK_MUTATION, {
    update: (cache, { data }) => {
      if (data?.deleteTask) {
        const cacheData = cache.readQuery({
          query: TASKS_QUERY,
          variables: { input: {} },
        });
        if (cacheData) {
          cache.writeQuery({
            query: TASKS_QUERY,
            variables: { input: {} },
            data: {
              tasks: cacheData.tasks.filter(
                (cacheTask) => cacheTask.id != taskId
              ),
            },
          });
        }
      }
    },
  });

  return { deleteTask, result };
};
