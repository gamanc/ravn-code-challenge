import { graphql } from "../../gql";

const ALL_USERS_QUERY = graphql(`
  query GetAllUsers {
    users {
      id
      fullName
      avatar
    }
  }
`);

export { ALL_USERS_QUERY };
