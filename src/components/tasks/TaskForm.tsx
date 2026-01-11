"use client";
import {
  Button,
  Field,
  Flex,
  Input,
  Textarea,
  Text,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { withMask } from "use-mask-input";

type TaskFormProps = {
  onAdd: (title: string, description: string, deadline: string) => void;
};

export default function TaskForm({ onAdd }: TaskFormProps) {
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
      p="6"
      rounded="xl"
      shadow="md"
      bg="card.bg"
      w="full"
      mb="8"
    >
      <Text color="text.heading" fontWeight="semibold" fontSize="lg" mb="5">
        ➕ Новая задача
      </Text>

      <Field.Root required mb="4">
        <Field.Label color="text.body" fontWeight="medium" fontSize="sm">
          Название{" "}
          <Text as="span" color="red.500">
            *
          </Text>
        </Field.Label>
        <Input
          placeholder="Введите название задачи"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          variant="outline"
        />
      </Field.Root>

      <Flex gap="4" mb="5">
        <Field.Root flex="2">
          <Field.Label color="text.body" fontWeight="medium" fontSize="sm">
            Описание
          </Field.Label>
          <Textarea
            placeholder="Введите описание задачи"
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
            rows={3}
            variant="outline"
          />
        </Field.Root>

        <Field.Root flex="1">
          <Field.Label color="text.body" fontWeight="medium" fontSize="sm">
            Дедлайн
          </Field.Label>
          <Input
            placeholder="ДД.ММ.ГГГГ"
            ref={withMask("99.99.9999")}
            value={taskDeadline}
            onChange={(e) => setTaskDeadline(e.target.value)}
            variant="outline"
          />
        </Field.Root>
      </Flex>

      <Flex justifyContent="flex-end">
        <Button variant="solid" onClick={handleClick}>
          <Box display={{ base: "flex", md: "none" }} alignItems="center">
            <LuPlus size={20} />
          </Box>
          <Box display={{ base: "none", md: "block" }}>Создать задачу</Box>
        </Button>
      </Flex>
    </Flex>
  );
}
