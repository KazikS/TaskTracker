"use client";
import TaskList from "../components/tasks/TaskList";
import TaskForm from "@/components/tasks/TaskForm";
import { useEffect, useState } from "react";
import { TaskType } from "@/types/task";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  const [taskList, setTaskList] = useState<TaskType[]>(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("tasks");
    if (saved) {
      return JSON.parse(saved);
    } else {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  const parseDateString = (date: string) => {
    return new Date(date).getTime();
  };

  const deleteTask = (id: string) => {
    const newArray = taskList.filter((e) => e.id !== id);
    setTaskList(newArray);
  };

  const addTask = (title: string, description: string, deadline: string) => {
    const now = Math.floor(new Date().getTime());
    console.log(now);
    const newTask: TaskType = {
      id: globalThis.crypto.randomUUID(),
      title,
      description,
      dueDate: parseDateString(deadline),
      createdAt: now,
      status: "preparing",
    };

    setTaskList([...taskList, newTask]);
  };

  const updateTaskStatus = (id: string) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id !== id) {
          return task;
        }
        const statusArray: TaskType["status"][] = [
          "preparing",
          "inProgress",
          "completed",
        ];
        const currentIndex = statusArray.indexOf(task.status);
        const nextIndex = (currentIndex + 1) % statusArray.length;
        const nextStatus = statusArray[nextIndex];

        return { ...task, status: nextStatus };
      })
    );
  };

  return (
    <Flex flexDirection="column">
      <TaskForm onAdd={addTask} />
      <TaskList
        tasksArray={taskList}
        onDelete={deleteTask}
        updateTaskStatus={updateTaskStatus}
      />
    </Flex>
  );
}
