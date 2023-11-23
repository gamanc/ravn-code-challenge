import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  label?: string;
  icon?: React.ReactNode;
  color: "neutral" | "neutral.light" | "primary" | "secondary" | "tertiary";
}

const Chip = ({ label, icon, color }: Props) => {
  return (
    <Box
      py={1}
      px={4}
      w="auto"
      display="flex"
      bg={`${color}.100`}
      color={`${color}.400`}
      alignItems="center"
      borderRadius="4px"
    >
      {icon}
      <Text
        ml={icon ? 2 : 0}
        fontWeight={600}
        fontSize="sm"
        textTransform="uppercase"
      >
        {label}
      </Text>
    </Box>
  );
};

export default Chip;
