import { TaskType } from "@/types/task";
import { Flex, Grid, Text } from "@chakra-ui/react";
import TaskCard from "./TaskCard";

export default function TaskList({
  tasksArray,
  onDelete,
  updateTaskStatus,
}: {
  tasksArray: TaskType[];
  onDelete: (id: string) => void;
  updateTaskStatus: (id: string) => void;
}) {
  if (!tasksArray) {
    return <Text>Задачи отсутствуют</Text>;
  }

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap="3"
      w="full"
    >
      {tasksArray.map((task) => (
        <Flex key={task.id} justifyContent="center">
          <TaskCard
            task={task}
            onDelete={onDelete}
            updateTaskStatus={updateTaskStatus}
          />
        </Flex>
      ))}
    </Grid>
  );
}
