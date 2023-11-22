import { Box, Text, VStack } from "@chakra-ui/react";
import TaskCard from "./TaskCard";

interface Props {
  title?: string;
  tasks: number[];
}

const TaskColumn = ({ title = "", tasks }: Props) => {
  return (
    <Box flex={1} height="100%" maxH="100%" minW="300px" overflowY="hidden">
      <Text fontWeight="600" pb={4}>
        {title}
      </Text>
      <Box overflowY="auto" height="90%">
        <VStack spacing={4}>
          {tasks.map((taskId) => (
            <TaskCard key={taskId} />
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default TaskColumn;
