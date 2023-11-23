import { Box, Link, ListItem } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  label: string;
  icon?: React.ReactElement;
}

const SidebarLink = ({ to = "/", label = "", icon }: Props) => {
  return (
    <ListItem>
      <Link
        as={NavLink}
        to={to}
        py={2}
        pl={4}
        display="flex"
        textTransform="uppercase"
        fontSize="sm"
        fontWeight={600}
        _activeLink={{
          borderRightWidth: 4,
          borderColor: "primary.400",
          color: "primary.400",
          bg: "linear-gradient(90deg, rgba(186,37,37,0) 0%, rgba(210,77,77,0.1) 100%)",
        }}
      >
        <Box w={6} h={6} mr={4}>
          {icon}
        </Box>
        {label}
      </Link>
    </ListItem>
  );
};

export default SidebarLink;
