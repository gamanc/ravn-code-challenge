import { BellIcon, SearchIcon } from "@chakra-ui/icons";
import { Avatar, Flex, HStack, Spacer, Text } from "@chakra-ui/react";

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
      <SearchIcon mr={8} color="neutral.200" boxSize={5} />
      <Text>Search...</Text>
      <Spacer />
      <HStack spacing={8}>
        <BellIcon color="neutral.200" boxSize={5} />
        <Avatar name="Ravn" size="sm" />
      </HStack>
    </Flex>
  );
};

export default Navbar;
