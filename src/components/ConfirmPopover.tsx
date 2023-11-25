import { ReactNode, useRef } from "react";
import {
  Button,
  FocusLock,
  HStack,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";

interface Props {
  triggerElement: ReactNode;
  actionLabel: string;
  onConfirm: () => void;
}

const ConfirmPopover = ({ triggerElement, actionLabel, onConfirm }: Props) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = useRef<HTMLButtonElement | null>(null);

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement="right"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Button variant="ghost" w="100%">
            {triggerElement}
          </Button>
        </PopoverTrigger>
        <PopoverContent p={5} w="min-content!important">
          <FocusLock autoFocus persistentFocus={false}>
            <HStack gap={4}>
              <Button
                textAlign="left"
                colorScheme="red"
                onClick={handleConfirm}
              >
                {actionLabel}
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </HStack>
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default ConfirmPopover;
