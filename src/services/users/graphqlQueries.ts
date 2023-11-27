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

const USER_PROFILE_QUERY = graphql(`
  query GetProfile {
    profile {
      id
      type
      fullName
      email
      avatar
      createdAt
      updatedAt
    }
  }
`);

export { ALL_USERS_QUERY, USER_PROFILE_QUERY };
