import { Avatar, Box, Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import Chip from "./Chip";

const TaskCard = () => {
  return (
    <Flex
      flexDirection="column"
      borderRadius="8px"
      bg="neutral.400"
      width="100%"
      minHeight={208}
      height="auto"
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
      <Wrap mt={4} spacing={"8px"} mb={4}>
        <WrapItem>
          <Chip label="IOS App" color="secondary" />
        </WrapItem>
        <WrapItem>
          <Chip label="Android" color="tertiary" />
        </WrapItem>
      </Wrap>
      <Flex justifyContent="space-between" position="relative" mt="auto">
        <Avatar name="Ravn" src="url/to/image" size="sm" />
      </Flex>
    </Flex>
  );
};

export default TaskCard;
