export type TaskType = {
    createdAt: number;
    dueDate?: number;
    title: string;
    description?: string;
    status: "preparing" | "inProgress" | "completed";
    id: string;
}