import { Box, Flex, Text } from "@chakra-ui/react";
import Chip from "./Chip";

const TaskCard = () => {
  return (
    <Flex
      flexDirection="column"
      borderRadius="8px"
      bg="neutral.400"
      width="100%"
      h={208}
      p={4}
    >
      <Flex justifyContent="space-between" pb={4}>
        <Text fontWeight={600}>Slack</Text>
        <Box w={6} h={6} bg="neutral.300"></Box>
      </Flex>
      <Flex justifyContent="space-between">
        <Text fontSize="small" fontWeight={600}>
          4 points
        </Text>
        <Chip icon={<Box />} label="Tomorrow" color="neutral.light" />
      </Flex>
      <Flex justifyContent="flex-start" wrap="wrap" mt={4} gap={2}>
        <Chip icon={<Box />} label="IOS App" color="secondary" />
        <Chip icon={<Box />} label="Android" color="tertiary" />
      </Flex>
    </Flex>
  );
};

export default TaskCard;
