import { Flex, Spinner } from "@chakra-ui/react";
import TaskColumn from "../components/TaskColumn";

import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { Status as TaskStatus, Task } from "../gql/graphql";
import { TASKS_QUERY } from "../queries/taskQuerys";
import { COLUMNS_ORDER, getTaskStatusName } from "../constants/tasks";

const Dashboard = () => {
  const { data, loading, error } = useQuery(TASKS_QUERY, {
    variables: { input: {} },
  });

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
    <Flex height="calc(100vh - 200px)" mt={6} gap={4} overflowX="auto">
      {loading && (
        <Flex w="100%" justifyContent="center">
          <Spinner size="xl" color="primary.400" />
        </Flex>
      )}
      {COLUMNS_ORDER.map((status) => {
        const columnTasks = organizedTasksByStatus[status] as Task[];
        return (
          <TaskColumn
            key={status}
            title={getTaskStatusName(status)}
            tasks={columnTasks}
          />
        );
      })}
    </Flex>
  );
};

export default Dashboard;
