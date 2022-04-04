export interface SubTask {
  id: string;
  title: string;
  createdAt: Date;
}

export interface Task {
  title: string
  subtasks: SubTask[]
}
