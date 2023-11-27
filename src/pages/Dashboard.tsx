import { Flex, Spinner, Text } from "@chakra-ui/react";
import TaskColumn from "../components/TaskColumn";

import { useEffect, useMemo } from "react";
import { Status as TaskStatus, Task } from "../gql/graphql";
import { COLUMNS_ORDER, getTaskStatusName } from "../constants/tasks";
import { useFindTasks } from "../services/tasks/hooks";
import { useStore } from "../store/store";
import { useDebounce } from "../hooks/useDebounce";

const Dashboard = () => {
  const { getTasks, result } = useFindTasks();
  const { data, loading, error } = result;
  const { searchTerm } = useStore();
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    getTasks({ variables: { input: {} } });
  }, []);

  useEffect(() => {
    const filters = debouncedSearchTerm ? { name: debouncedSearchTerm } : {};
    getTasks({ variables: { input: filters } });
  }, [debouncedSearchTerm]);

  const organizedTasksByStatus = useMemo((): Record<TaskStatus, Task[]> => {
    if (!data?.tasks)
      return {
        BACKLOG: [],
        CANCELLED: [],
        DONE: [],
        IN_PROGRESS: [],
        TODO: [],
      };
    return data?.tasks.reduce((acc, task) => {
      const { status } = task;
      if (!acc[status]) {
        acc[status] = [];
      }
      acc[status].push(task as Task);
      return acc;
    }, {} as Record<TaskStatus, Task[]>);
  }, [data?.tasks]);

  if (error) return <p>{error.message}</p>;

  return (
    <>
      {data?.tasks.length === 0 && (
        <Text textAlign="center" w="100%">
          No tasks found
        </Text>
      )}
      <Flex height="calc(100vh - 200px)" mt={6} gap={4} overflowX="auto">
        {loading && (
          <Flex w="100%" justifyContent="center">
            <Spinner size="xl" color="primary.400" />
          </Flex>
        )}
        {!loading &&
          !error &&
          COLUMNS_ORDER.map((status) => {
            const columnTasks = organizedTasksByStatus[status] as Task[];
            return (
              <TaskColumn
                key={status}
                title={getTaskStatusName(status)}
                status={status}
                tasks={columnTasks}
              />
            );
          })}
      </Flex>
    </>
  );
};

export default Dashboard;
