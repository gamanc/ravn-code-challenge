import { graphql } from "../../gql";

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

export const UPDATE_TASK_MUTATION = graphql(`
  mutation updateTask($input: UpdateTaskInput!) {
    updateTask(input: $input) {
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

export { CREATE_TASK_MUTATION, DELETE_TASK_MUTATION };
