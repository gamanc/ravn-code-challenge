import {
  Avatar,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Text,
  Tooltip,
  Wrap,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon, TimeIcon } from "@chakra-ui/icons";
import IconDots from "../assets/icons/IconDots";
import { PointEstimate, Task } from "../gql/graphql";
import { getPointEstimateValue } from "../constants/tasks";
import { calculateDateDifference } from "../helpers/dates";

import ConfirmPopover from "./ConfirmPopover";
import Chip, { ChipColor } from "./Chip";

import { useDeleteTask } from "../services/tasks/hooks";
import TaskFormModal from "./TaskFormModal";
import { useStore } from "../store/store";

interface Props {
  task: Partial<Task>;
}

const TaskCard = ({ task }: Props) => {
  const dueDateObject = calculateDateDifference(task.dueDate);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setIsDragging } = useStore();

  const { deleteTask } = useDeleteTask(task.id!);

  const handleOnDrag = (e: React.DragEvent) => {
    e.dataTransfer.setData("taskId", task.id!);
    setIsDragging(true);
  };

  return (
    <Flex
      flexDirection="column"
      borderRadius="8px"
      bg="neutral.400"
      width="100%"
      minHeight={208}
      height="auto"
      p={4}
      transform="translate(0,0)"
      onDragStart={handleOnDrag}
      draggable
    >
      <Flex justifyContent="space-between" pb={4}>
        <Text fontWeight={600}>{task.name}</Text>
        <Menu closeOnSelect={false}>
          <MenuButton
            as={IconButton}
            size="sm"
            transition="all 0.2s"
            color="neutral.200"
            aria-label="Options"
            bg="neutral.400"
            _hover={{ bg: "neutral.300" }}
            _expanded={{ bg: "neutral.200", color: "neutral.400" }}
            icon={<IconDots />}
          />
          <MenuList w="140px">
            <TaskFormModal
              triggerElement={
                <Button variant="ghost" w="100%" onClick={onOpen}>
                  <Flex w="100%">
                    <EditIcon boxSize={5} />
                    <Text size="sm" ml={2}>
                      Edit
                    </Text>
                  </Flex>
                </Button>
              }
              isModalOpen={isOpen}
              onOpenModal={onOpen}
              onCloseModal={onClose}
              task={task}
            />

            <ConfirmPopover
              actionLabel="Delete"
              onConfirm={() =>
                deleteTask({ variables: { input: { id: task.id! } } })
              }
              triggerElement={
                <Flex w="100%">
                  <DeleteIcon boxSize={5} />
                  <Text size="sm" ml={2}>
                    Delete
                  </Text>
                </Flex>
              }
            />
          </MenuList>
        </Menu>
      </Flex>
      <Flex justifyContent="space-between">
        <Text fontSize="small" fontWeight={600} textTransform="lowercase">
          {`${
            getPointEstimateValue(task.pointEstimate || PointEstimate.Zero)
              .numeric
          } points`}
        </Text>
        <Chip
          icon={<TimeIcon boxSize={4} />}
          label={dueDateObject.label}
          color={dueDateObject.color as ChipColor}
        />
      </Flex>
      <Wrap mt={4} spacing={"8px"} mb={4}>
        {task.tags?.map((tag) => (
          <WrapItem key={tag}>
            <Chip label={tag} color="secondary" />
          </WrapItem>
        ))}
      </Wrap>
      <Flex justifyContent="space-between" position="relative" mt="auto">
        <Tooltip
          label={task.assignee?.fullName}
          openDelay={500}
          bg="neutral.400"
          color="white"
        >
          <Avatar
            name={task.assignee?.fullName}
            src={task.assignee?.avatar || "/"}
            size="sm"
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default TaskCard;
