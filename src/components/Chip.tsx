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
      w="auto"
      bg={`${color}.100`}
      py={1}
      px={4}
      display="flex"
      alignItems="center"
      borderRadius="4px"
    >
      {icon && (
        <Box bg={`${color}.400`} width="20px" height="20px" mr="2">
          {icon}
        </Box>
      )}
      <Text fontWeight={500} color={`${color}.400`} textTransform="uppercase">
        {label}
      </Text>
    </Box>
  );
};

export default Chip;
