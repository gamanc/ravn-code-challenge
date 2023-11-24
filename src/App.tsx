import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";

import { client } from "./config/apollo";
import theme from "./config/theme";
import { router } from "./config/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
