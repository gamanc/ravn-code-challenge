import ravnLogo from "../assets/images/RavnLogo.svg";
import { Flex, Image, List } from "@chakra-ui/react";
import SidebarLink from "./SidebarLink";
import IconDashboard from "../assets/icons/IconDashboard";
import IconHamburger from "../assets/icons/IconHamburger";
import { ROUTES } from "../constants/routes";

const Sidebar = () => {
  return (
    <Flex
      flexDirection="column"
      borderRadius="24px"
      bg="neutral.400"
      alignItems="center"
      height="100%"
      py={4}
    >
      <Image src={ravnLogo} boxSize="40px" alt="Ravn" mb={4} />
      <List color="white" w="full" spacing={4} mt={4}>
        <SidebarLink
          to={ROUTES.main}
          label="Dashboard"
          icon={<IconDashboard />}
        />
        <SidebarLink
          to={ROUTES.myTasks}
          label="My tasks"
          icon={<IconHamburger />}
        />
      </List>
    </Flex>
  );
};

export default Sidebar;
