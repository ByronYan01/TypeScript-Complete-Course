export {};
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface Result<T = unknown> {
  code: string;
  data: T;
  message: string;
}
