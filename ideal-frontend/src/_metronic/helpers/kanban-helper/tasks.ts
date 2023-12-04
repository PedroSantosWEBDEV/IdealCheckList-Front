type Task = {
    id: string,
    name: string,
    totalTime: number,
    stage?: number | string | undefined
}

export const getTasksByStage = (tasks: Task[], status: string) => {
    return tasks.filter((task) => task.stage == status);
};

export const getTaskById = (tasks: Task[], id: string) => {
    return tasks.find((task) => task.id === id);
};