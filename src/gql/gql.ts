/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation createTask($input: CreateTaskInput!) {\n    createTask(input: $input) {\n      id\n      position\n      pointEstimate\n      name\n      dueDate\n      status\n      tags\n      assignee {\n        id\n        fullName\n        avatar\n      }\n      creator {\n        id\n        fullName\n        avatar\n      }\n    }\n  }\n": types.CreateTaskDocument,
    "\n  mutation updateTask($input: UpdateTaskInput!) {\n    updateTask(input: $input) {\n      id\n      position\n      pointEstimate\n      name\n      dueDate\n      status\n      tags\n      assignee {\n        id\n        fullName\n        avatar\n      }\n      creator {\n        id\n        fullName\n        avatar\n      }\n    }\n  }\n": types.UpdateTaskDocument,
    "\n  mutation deleteTask($input: DeleteTaskInput!) {\n    deleteTask(input: $input) {\n      id\n      position\n      pointEstimate\n      name\n      dueDate\n      status\n      tags\n      assignee {\n        id\n        fullName\n        avatar\n      }\n      creator {\n        id\n        fullName\n        avatar\n      }\n    }\n  }\n": types.DeleteTaskDocument,
    "\n  query GetAllTasks($input: FilterTaskInput!) {\n    tasks(input: $input) {\n      id\n      position\n      pointEstimate\n      name\n      dueDate\n      status\n      tags\n      assignee {\n        id\n        fullName\n        avatar\n      }\n      creator {\n        id\n        fullName\n        avatar\n      }\n    }\n  }\n": types.GetAllTasksDocument,
    "\n  query GetAllUsers {\n    users {\n      id\n      fullName\n      avatar\n    }\n  }\n": types.GetAllUsersDocument,
    "\n  query GetProfile {\n    profile {\n      id\n      type\n      fullName\n      email\n      avatar\n      createdAt\n      updatedAt\n    }\n  }\n": types.GetProfileDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createTask($input: CreateTaskInput!) {\n    createTask(input: $input) {\n      id\n      position\n      pointEstimate\n      name\n      dueDate\n      status\n      tags\n      assignee {\n        id\n        fullName\n        avatar\n      }\n      creator {\n        id\n        fullName\n        avatar\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createTask($input: CreateTaskInput!) {\n    createTask(input: $input) {\n      id\n      position\n      pointEstimate\n      name\n      dueDate\n      status\n      tags\n      assignee {\n        id\n        fullName\n        avatar\n      }\n      creator {\n        id\n        fullName\n        avatar\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateTask($input: UpdateTaskInput!) {\n    updateTask(input: $input) {\n      id\n      position\n      pointEstimate\n      name\n      dueDate\n      status\n      tags\n      assignee {\n        id\n        fullName\n        avatar\n      }\n      creator {\n        id\n        fullName\n        avatar\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation updateTask($input: UpdateTaskInput!) {\n    updateTask(input: $input) {\n      id\n      position\n      pointEstimate\n      name\n      dueDate\n      status\n      tags\n      assignee {\n        id\n        fullName\n        avatar\n      }\n      creator {\n        id\n        fullName\n        avatar\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteTask($input: DeleteTaskInput!) {\n    deleteTask(input: $input) {\n      id\n      position\n      pointEstimate\n      name\n      dueDate\n      status\n      tags\n      assignee {\n        id\n        fullName\n        avatar\n      }\n      creator {\n        id\n        fullName\n        avatar\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation deleteTask($input: DeleteTaskInput!) {\n    deleteTask(input: $input) {\n      id\n      position\n      pointEstimate\n      name\n      dueDate\n      status\n      tags\n      assignee {\n        id\n        fullName\n        avatar\n      }\n      creator {\n        id\n        fullName\n        avatar\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllTasks($input: FilterTaskInput!) {\n    tasks(input: $input) {\n      id\n      position\n      pointEstimate\n      name\n      dueDate\n      status\n      tags\n      assignee {\n        id\n        fullName\n        avatar\n      }\n      creator {\n        id\n        fullName\n        avatar\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllTasks($input: FilterTaskInput!) {\n    tasks(input: $input) {\n      id\n      position\n      pointEstimate\n      name\n      dueDate\n      status\n      tags\n      assignee {\n        id\n        fullName\n        avatar\n      }\n      creator {\n        id\n        fullName\n        avatar\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllUsers {\n    users {\n      id\n      fullName\n      avatar\n    }\n  }\n"): (typeof documents)["\n  query GetAllUsers {\n    users {\n      id\n      fullName\n      avatar\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProfile {\n    profile {\n      id\n      type\n      fullName\n      email\n      avatar\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GetProfile {\n    profile {\n      id\n      type\n      fullName\n      email\n      avatar\n      createdAt\n      updatedAt\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;