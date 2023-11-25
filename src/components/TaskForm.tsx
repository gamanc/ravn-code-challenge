import {
  FormControl,
  Input,
  Select,
  Menu,
  MenuButton,
  MenuList,
  Text,
  Box,
  Flex,
  VStack,
  FormErrorMessage,
} from "@chakra-ui/react";

import { Select as MultiSelect } from "chakra-react-select";
import { Controller, useFormContext } from "react-hook-form";
import DatePicker from "sassy-datepicker";
import { PointEstimate, TaskTag } from "../gql/graphql";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { TaskTagOption } from "../constants/tasks";

interface UserOption {
  id: string;
  avatar: string;
  fullName: string;
}

export interface TaskFormData {
  taskName: string;
  pointEstimate: PointEstimate;
  assignee: string;
  tags: TaskTagOption[];
  dueDate: Date | null;
}

const users: UserOption[] = [
  {
    id: "703de395-1d49-4471-aafa-d990dcf32cd1",
    fullName: "Grace Stone",
    avatar: "https://avatars.dicebear.com/api/initials/gs.svg",
  },
  {
    id: "a35d73eb-6829-4a92-ab82-43fe987ae02f",
    fullName: "Jhon Doe",
    avatar: "https://avatars.dicebear.com/api/initials/jd.svg",
  },
];

const TaskForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <FormControl mb={8} id="taskName" isInvalid={!!errors.taskName}>
        <Controller
          control={control}
          name="taskName"
          rules={{
            required: "Task name is required",
            validate: (value) =>
              value.trim() !== "" || "Task name cannot be empty",
          }}
          defaultValue=""
          render={({ field, fieldState: { error } }) => (
            <>
              <Input {...field} variant="flush" placeholder="Task name" />
              <FormErrorMessage>{error && error.message}</FormErrorMessage>
            </>
          )}
        />
      </FormControl>
      <VStack>
        <FormControl
          mb={8}
          id="pointEstimate"
          isInvalid={!!errors.pointEstimate}
        >
          <Controller
            control={control}
            name="pointEstimate"
            rules={{ required: "Points estimate is required" }}
            render={({ field }) => (
              <Select {...field} placeholder="Estimate">
                {Object.entries(PointEstimate).map(([key, value]) => (
                  <option key={value} value={value}>
                    {key}
                  </option>
                ))}
              </Select>
            )}
          />
        </FormControl>
        <FormControl mb={8} id="assignee" isInvalid={!!errors.assignee}>
          <Controller
            control={control}
            name="assignee"
            rules={{ required: "Assignee is required" }}
            render={({ field }) => (
              <Select {...field} placeholder="Assignee">
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.fullName}
                  </option>
                ))}
              </Select>
            )}
          />
        </FormControl>
        <FormControl mb={8} id="tags" isInvalid={!!errors.tags}>
          <Controller
            control={control}
            name="tags"
            rules={{ required: "Please select some tags" }}
            render={({ field }) => (
              <MultiSelect
                {...field}
                options={Object.entries(TaskTag).map(([key, value]) => ({
                  label: key,
                  value,
                }))}
                placeholder="Select tags"
                closeMenuOnSelect={false}
                isMulti
              />
            )}
          />
        </FormControl>
        <FormControl mb={8} id="dueDate" isInvalid={!!errors.dueDate}>
          <Controller
            render={({ field }) => (
              <Menu>
                <MenuButton
                  as={Box}
                  px={4}
                  py={2}
                  w="full"
                  minW={200}
                  transition="all 0.2s"
                  borderRadius="md"
                  borderWidth="1px"
                >
                  <Flex justifyContent="space-between" alignItems="center">
                    <Text whiteSpace="nowrap">
                      {field.value?.toDateString() || "Select due date"}
                    </Text>
                    <ChevronDownIcon boxSize={5} />
                  </Flex>
                </MenuButton>
                <MenuList>
                  <DatePicker
                    {...field}
                    value={field.value as Date}
                    placeholder="Select due date"
                  />
                </MenuList>
              </Menu>
            )}
            control={control}
            name="dueDate"
            rules={{ required: "Due date is required" }}
          />
        </FormControl>
      </VStack>
    </>
  );
};

export default TaskForm;
