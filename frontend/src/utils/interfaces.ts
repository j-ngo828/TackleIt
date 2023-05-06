export interface ITodoItem {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  priority: 'high' | 'medium' | 'low';
}
