import { PointEstimate, Status as TaskStatus } from "../gql/graphql";

export const COLUMNS_ORDER: TaskStatus[] = [
  TaskStatus.Backlog,
  TaskStatus.Todo,
  TaskStatus.InProgress,
  TaskStatus.Cancelled,
  TaskStatus.Done,
];

// Task status name

type StatusStringObject = {
  [K in TaskStatus]: string;
};

const TASK_STATUS_HUMAN_NAME: StatusStringObject = {
  [TaskStatus.Backlog]: "Backlog",
  [TaskStatus.Cancelled]: "Cancelled",
  [TaskStatus.Done]: "Done",
  [TaskStatus.InProgress]: "In Progress",
  [TaskStatus.Todo]: "Todo",
};

export const getTaskStatusName = (status: TaskStatus) =>
  TASK_STATUS_HUMAN_NAME[status] ?? status;

// Point Estimate

type PointEstimateNumberObject = {
  [K in PointEstimate]: number;
};

const POINT_ESTIMATE_NUMERIC_VALUE: PointEstimateNumberObject = {
  [PointEstimate.Zero]: 0,
  [PointEstimate.One]: 1,
  [PointEstimate.Two]: 2,
  [PointEstimate.Four]: 4,
  [PointEstimate.Eight]: 8,
};

export const getPointEstimateValue = (pointEstimate: PointEstimate) =>
  POINT_ESTIMATE_NUMERIC_VALUE[pointEstimate] ?? pointEstimate;

export const TASK_FORM_DEFAULT_VALUES = {
  taskName: "",
  assignee: "",
  dueDate: undefined,
  pointEstimate: undefined,
  tags: [],
};

export type TaskTagOption = {
  label: string;
  value: string;
};
