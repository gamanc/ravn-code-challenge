import { AddIcon, BellIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Flex,
  HStack,
  IconButton,
  Input,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import IconRouteLink from "./IconRouteLink";
import IconDashboard from "../assets/icons/IconDashboard";
import IconHamburger from "../assets/icons/IconHamburger";
import TaskFormModal from "./TaskFormModal";
import { useStore } from "../store/store";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { searchTerm, setSearchTerm } = useStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Flex as="nav" flexDir="column">
      <Flex
        p={"12px 24px 12px 24px"}
        alignItems={"center"}
        bg={"neutral.400"}
        borderRadius={16}
        color={"neutral.200"}
      >
        <SearchIcon mr={6} color="neutral.200" boxSize={5} />
        <Input
          variant="unstyled"
          placeholder="Search..."
          size="lg"
          value={searchTerm}
          onChange={handleChange}
        />
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
        <TaskFormModal
          triggerElement={
            <IconButton
              aria-label="Add task"
              bg="primary.400"
              _hover={{ bg: "primary.300" }}
              _active={{ bg: "primary.200" }}
              icon={<AddIcon />}
              onClick={onOpen}
            />
          }
          isModalOpen={isOpen}
          onOpenModal={onOpen}
          onCloseModal={onClose}
        />
      </Flex>
    </Flex>
  );
};

export default Navbar;
