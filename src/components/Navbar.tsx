import { BellIcon, SearchIcon } from "@chakra-ui/icons";
import { Avatar, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import IconRouteLink from "./IconRouteLink";
import IconDashboard from "../assets/icons/IconDashboard";
import IconHamburger from "../assets/icons/IconHamburger";
import TaskFormModal from "./TaskFormModal";

const Navbar = () => {
  return (
    <Flex as="nav" flexDir="column">
      <Flex
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
      <Flex justifyContent="space-between" mt={8}>
        <HStack>
          <IconRouteLink to="/my-tasks" icon={<IconHamburger />} />
          <IconRouteLink to="/" icon={<IconDashboard />} />
        </HStack>
        <TaskFormModal />
      </Flex>
    </Flex>
  );
};

export default Navbar;
