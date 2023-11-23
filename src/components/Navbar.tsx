import { Box, Flex, HStack, Spacer, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      as={"nav"}
      p={"12px 24px 12px 24px"}
      alignItems={"center"}
      bg={"neutral.400"}
      borderRadius={16}
      color={"neutral.200"}
    >
      <Box w={8} h={8} mr={8} bg={"neutral.300"} />
      <Text>Search...</Text>
      <Spacer />
      <HStack spacing={8}>
        <Box w={8} h={8} bg={"neutral.300"} />
        <Box w={10} h={10} bg={"neutral.300"} />
      </HStack>
    </Flex>
  );
};

export default Navbar;
