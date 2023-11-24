import {
  Avatar,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Chip from "./Chip";
import { DeleteIcon, EditIcon, TimeIcon } from "@chakra-ui/icons";
import IconDots from "../assets/icons/IconDots";
import { PointEstimate, Task } from "../gql/graphql";
import { getPointEstimateValue } from "../constants/tasks";

interface Props {
  task: Partial<Task>;
}

const TaskCard = ({ task }: Props) => {
  return (
    <Flex
      flexDirection="column"
      borderRadius="8px"
      bg="neutral.400"
      width="100%"
      minHeight={208}
      height="auto"
      p={4}
    >
      <Flex justifyContent="space-between" pb={4}>
        <Text fontWeight={600}>{task.name}</Text>
        <Menu>
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
            <MenuItem>
              <EditIcon boxSize={5} />
              <Text size="sm" ml={2}>
                Edit
              </Text>
            </MenuItem>
            <MenuItem>
              <DeleteIcon boxSize={5} />
              <Text size="sm" ml={2}>
                Delete
              </Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Flex justifyContent="space-between">
        <Text fontSize="small" fontWeight={600} textTransform="lowercase">
          {getPointEstimateValue(task.pointEstimate || PointEstimate.Zero)}{" "}
          points
        </Text>
        <Chip
          icon={<TimeIcon boxSize={4} />}
          label="Tomorrow"
          color="neutral.light"
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
        <Avatar
          name={task.assignee?.fullName}
          src={task.assignee?.avatar || "/"}
          size="sm"
        />
      </Flex>
    </Flex>
  );
};

export default TaskCard;
