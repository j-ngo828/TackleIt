export interface ITodo {
  title: string;
  description: string;
  isCompleted: boolean;
  priority: 'high' | 'medium' | 'low';
  id: string;
}

export interface TodoPayload {
  title?: string;
  description?: string;
  isCompleted?: boolean;
  priority?: 'high' | 'medium' | 'low';
}
