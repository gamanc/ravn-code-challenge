import { Flex } from "@chakra-ui/react";
import TaskColumn from "../components/TaskColumn";

const Dashboard = () => {
  return (
    <Flex height="calc(100vh - 140px)" mt={6} gap={4}>
      <TaskColumn title="Working (03)" tasks={[0, 1, 2, 3, 4, 5, 6]} />
      <TaskColumn title="In progress (03)" tasks={[7, 8, 9]} />
      <TaskColumn title="Completed (03)" tasks={[10, 11, 12, 13, 15]} />
    </Flex>
  );
};

export default Dashboard;
