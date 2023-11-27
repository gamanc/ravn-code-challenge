import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = `${error.status} - ${error.statusText}`;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    errorMessage = "An unknown error has occurred. ";
  }

  return (
    <Flex
      height="100vh"
      width="100vw"
      justifyContent="center"
      alignItems="center"
      backgroundColor="neutral.100"
    >
      <VStack
        p={10}
        borderRadius="md"
        backgroundColor="neutral.500"
        boxShadow="md"
        gap={10}
        maxW="4xl"
      >
        <Heading as="h2" size="lg" textAlign="center">
          Something went wrong!
        </Heading>
        <Text as="p" textAlign="center" fontSize="md">
          We're sorry, but an unexpected error occurred. <br />
          Our team is working on resolving the issue. Please try reloading the
          page later.
        </Text>

        {errorMessage && (
          <Box mt={4}>
            <Heading as="h4" size="md">
              Error Details:
            </Heading>
            <Text as="pre" fontSize="sm">
              {errorMessage}
            </Text>
          </Box>
        )}
      </VStack>
    </Flex>
  );
};

export default ErrorBoundary;
