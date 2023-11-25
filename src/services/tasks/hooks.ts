import { useMutation, useQuery } from "@apollo/client";
import { TASKS_QUERY } from "./graphqlQueries";
import { DELETE_TASK_MUTATION } from "./graphqlMutations";

export const useAllTasks = () => {
  const result = useQuery(TASKS_QUERY, {
    variables: { input: {} },
  });

  return result;
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
