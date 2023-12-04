export type Task = {
    id: string,
    name: string,
    totalTime: number,
    stage?: number | string | undefined
}

export type Stage = {
    [id: string]: string
}

export type Board = {
    [id: string]: Task[]
}