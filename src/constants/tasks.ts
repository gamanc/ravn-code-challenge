import { PointEstimate, Status as TaskStatus, TaskTag } from "../gql/graphql";

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
  [K in PointEstimate]: { numeric: number; string: string };
};

const POINT_ESTIMATE_NUMERIC_VALUE: PointEstimateNumberObject = {
  [PointEstimate.Zero]: { numeric: 0, string: "Zero" },
  [PointEstimate.One]: { numeric: 1, string: "One" },
  [PointEstimate.Two]: { numeric: 2, string: "Two" },
  [PointEstimate.Four]: { numeric: 4, string: "Four" },
  [PointEstimate.Eight]: { numeric: 8, string: "Eight" },
};

export const POINT_ESTIMATE_ORDER: PointEstimate[] = [
  PointEstimate.Zero,
  PointEstimate.One,
  PointEstimate.Two,
  PointEstimate.Four,
  PointEstimate.Eight,
];

export const getPointEstimateValue = (pointEstimate: PointEstimate) =>
  POINT_ESTIMATE_NUMERIC_VALUE[pointEstimate] ?? pointEstimate;

export const TASK_FORM_DEFAULT_VALUES = {
  taskName: "",
  assignee: "",
  dueDate: undefined,
  pointEstimate: undefined,
  tags: [],
};

// Tags

export type TaskTagOption = {
  label: string;
  value: string;
};

type TagsStringObject = {
  [K in TaskTag]: string;
};

const TASK_TAGS_NAME: TagsStringObject = {
  [TaskTag.Android]: "Android",
  [TaskTag.Ios]: "Ios",
  [TaskTag.NodeJs]: "NodeJs",
  [TaskTag.Rails]: "Rails",
  [TaskTag.React]: "React",
};

export const getTaskTagName = (tag: TaskTag) => TASK_TAGS_NAME[tag] ?? tag;
