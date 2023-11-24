import { Link } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  icon?: React.ReactElement;
}

const IconRouteLink = ({ to = "/", icon }: Props) => {
  return (
    <Link
      as={NavLink}
      to={to}
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontSize="sm"
      borderRadius={8}
      height="40px"
      width="40px"
      _activeLink={{
        borderWidth: 1,
        borderColor: "primary.400",
        color: "primary.400",
        bg: "transparent",
      }}
    >
      {icon}
    </Link>
  );
};

export default IconRouteLink;
