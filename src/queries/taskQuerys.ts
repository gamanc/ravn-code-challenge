import { graphql } from "../gql";

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

const CREATE_TASK_MUTATION = graphql(`
  mutation createTask($input: CreateTaskInput!) {
    createTask(input: $input) {
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

const DELETE_TASK_MUTATION = graphql(`
  mutation deleteTask($input: DeleteTaskInput!) {
    deleteTask(input: $input) {
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

export { TASKS_QUERY, CREATE_TASK_MUTATION, DELETE_TASK_MUTATION };
