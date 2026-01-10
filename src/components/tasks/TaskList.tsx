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
  if (tasksArray.length === 0) {
    return <Text>Задачи отсутствуют</Text>;
  }

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="2">
      {tasksArray.map((task) => (
        <Flex key={task.id} justifyContent="center">
          <TaskCard task={task} onDelete={onDelete} updateTaskStatus={updateTaskStatus}/>
        </Flex>
      ))}
    </Grid>
  );
}
