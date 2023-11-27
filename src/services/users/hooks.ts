import { useQuery } from "@apollo/client";
import { ALL_USERS_QUERY, USER_PROFILE_QUERY } from "./graphqlQueries";

export const useAllUsers = () => {
  const result = useQuery(ALL_USERS_QUERY);
  return result;
};

export const useUserProfile = () => {
  const result = useQuery(USER_PROFILE_QUERY);
  return result;
};
