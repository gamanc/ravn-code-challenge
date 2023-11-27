import { Box, Text, VStack } from "@chakra-ui/react";
import TaskCard from "./TaskCard";
import { Status as TaskStatus, Task } from "../gql/graphql";
import { useUpdateTaskStatus } from "../services/tasks/hooks";
import { useStore } from "../store/store";

interface Props {
  title?: string;
  status: TaskStatus;
  tasks: Task[];
}

const TaskColumn = ({ title = "", status, tasks = [] }: Props) => {
  const { updateTaskStatus } = useUpdateTaskStatus();
  const { isDragging, setIsDragging } = useStore();

  const handleDrop = async (e: React.DragEvent) => {
    const taskId = e.dataTransfer.getData("taskId") as string;
    try {
      updateTaskStatus(taskId, status);
    } catch (error) {
      console.error(error);
    } finally {
      setIsDragging(false);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <Box
      flex={1}
      height="100%"
      maxH="100%"
      minW="300px"
      overflowY="hidden"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <Text fontWeight="600" pb={4}>
        {`${title} (${tasks.length})`}
      </Text>
      <Box
        overflowY="auto"
        height="calc(100% - 50px)"
        bg={isDragging ? "primary.100" : "transparent"}
        transition="background-color 0.5s ease"
        borderRadius={8}
      >
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
