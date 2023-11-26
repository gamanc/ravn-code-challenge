import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";

import { client } from "./config/apollo";
import theme from "./config/theme";
import { router } from "./config/router";
import { RouterProvider } from "react-router-dom";

import { createStandaloneToast } from "@chakra-ui/react";
const { ToastContainer } = createStandaloneToast();

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
        <ToastContainer />
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
