export interface SubTask {
  id: string;
  title: string;
  taskId: string;
  createdAt: Date;
}

export interface Task {
  id: string;
  title: string
  subtasks: SubTask[]
}
