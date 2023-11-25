import { graphql } from "../../gql";

const TASKS_QUERY = graphql(`
  query GetAllTasks($input: FilterTaskInput!) {
    tasks(input: $input) {
      id
      position
      pointEstimate
      name
      dueDate
      status
      tags
      assignee {
        id
        fullName
        avatar
      }
      creator {
        id
        fullName
        avatar
      }
    }
  }
`);

export { TASKS_QUERY };
