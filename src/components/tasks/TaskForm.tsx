"use client";

import { Button, Field, Flex, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { withMask } from "use-mask-input";

type TaskFormProps = {
  onAdd: (title: string, description: string, deadline: string) => void;
};

export default function TaskForm({onAdd}: TaskFormProps) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");

  const handleClick = () => {
    if (!taskTitle.trim()) {
      alert("Название обязательно!");
      return;
    }
    onAdd(taskTitle, taskDesc, taskDeadline);
    setTaskDeadline("");
    setTaskDesc("");
    setTaskTitle("");
  };

  return (
    <Flex
      direction="column"
      maxW="1/3"
      p="4"
      border="solid black 1px"
      rounded="md"
      mx="auto"
    >
      <Field.Root required>
        <Field.Label>Название задачи</Field.Label>
        <Input
          placeholder="Введите название задачи"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      </Field.Root>
      <Field.Root mt="4" required>
        <Field.Label>Описание задачи</Field.Label>
        <Textarea
          placeholder="Введите описание задачи"
          value={taskDesc}
          onChange={(e) => setTaskDesc(e.target.value)}
        />
      </Field.Root>
      <Field.Root mt="4">
        <Field.Label>Дедлайн</Field.Label>
        <Input
          placeholder="Введите дедлайн"
          ref={withMask("99.99.9999")}
          value={taskDeadline}
          onChange={(e) => setTaskDeadline(e.target.value)}
        />
      </Field.Root>
      <Button mt="6" onClick={handleClick}>
        Создать задачу
      </Button>
    </Flex>
  );
}
