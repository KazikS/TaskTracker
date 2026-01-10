import { TaskType } from "@/types/task";
import { Badge, Card, Flex, IconButton, Text } from "@chakra-ui/react";
import { TaskStatus } from "./config";
import { formatDate } from "@/utils/dateFormatter";
import { IconDelete } from "@/shared/icons/IconDelete";

export default function TaskCard({
  task,
  onDelete,
  updateTaskStatus,
}: {
  task: TaskType;
  onDelete: (id: string) => void;
  updateTaskStatus: (id: string) => void;
}) {
  return (
    <Card.Root px="4">
      <Card.Header
        display="flex"
        flexDirection="row"
        position="relative"
        justifyContent="space-between"
        alignItems="center"
        px={0}
      >
        <Card.Title maxW="2/3">{task.title}</Card.Title>
        <Badge
          variant="solid"
          w="fit"
          px="2"
          py="2.5"
          rounded="2xl"
          color={`${TaskStatus[task.status].color}.contrast`}
          colorPalette={TaskStatus[task.status].color}
          cursor="pointer"
          onClick={() => updateTaskStatus(task.id)}
        >
          {TaskStatus[task.status].label}
        </Badge>
      </Card.Header>
      <Card.Description mt="10">{task.description}</Card.Description>
      <Card.Footer mt="8" p="0" pb="3">
        <Flex justifyContent="space-between" alignItems="center" flex="1">
          <Flex flexDir="column">
            <Text color="gray.600" fontSize={12} mr="2">
              Создано: {formatDate(task.createdAt)}
            </Text>
            <Text color="gray.600" fontSize={12}>
              Дедлайн: {task.dueDate ? formatDate(task.dueDate) : "нет"}
            </Text>
          </Flex>

          {task.id !== "0" && (
            <IconButton
              variant="outline"
              _hover={{ bgColor: "gray.200" }}
              bgColor="white"
              onClick={() => onDelete(task.id)}
            >
              <IconDelete />
            </IconButton>
          )}
        </Flex>
      </Card.Footer>
    </Card.Root>
  );
}
