import { Box, Text, VStack } from "@chakra-ui/react";
import TaskCard from "./TaskCard";
import { Task } from "../gql/graphql";

interface Props {
  title?: string;
  tasks: Task[];
}

const TaskColumn = ({ title = "", tasks = [] }: Props) => {
  return (
    <Box flex={1} height="100%" maxH="100%" minW="300px" overflowY="hidden">
      <Text fontWeight="600" pb={4}>
        {`${title} (${tasks.length})`}
      </Text>
      <Box overflowY="auto" height="calc(100% - 50px)">
        <VStack spacing={4}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default TaskColumn;
