import { useQuery } from "@apollo/client";
import { ALL_USERS_QUERY } from "./graphqlQueries";

export const useAllUsers = () => {
  const result = useQuery(ALL_USERS_QUERY);
  return result;
};
