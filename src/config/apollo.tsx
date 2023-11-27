import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { createStandaloneToast } from "@chakra-ui/react";
import { getErrorMessage } from "../constants/errorMessages";

const { toast } = createStandaloneToast();

const authLink = setContext((_, { headers }) => {
  const token = import.meta.env.VITE_API_TOKEN || "";
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_URL || "",
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    toast({
      title: "Error",
      description: getErrorMessage(graphQLErrors[0].extensions.code as string),
      status: "error",
      duration: 20000,
      isClosable: true,
    });
  }
  if (networkError) {
    toast({
      title: "Error",
      description: networkError.message,
      status: "error",
      duration: 20000,
      isClosable: true,
    });
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          tasks: {
            keyArgs: () => "allTasks",
            merge(existing = [], incoming, { args }) {
              const { offset = 0 } = args || {};

              if (offset > 0) {
                return [...existing, ...incoming];
              }

              return incoming;
            },
          },
        },
      },
    },
  }),
  link: authLink.concat(errorLink).concat(httpLink),
  connectToDevTools: true,
});

export { client };
