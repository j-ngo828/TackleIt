import { ObjectId } from 'mongoose';

export interface ITodo {
  title: string;
  description: string;
  isCompleted: boolean;
  priority: 'high' | 'medium' | 'low';
  id: ObjectId;
}

export interface TodoPayload {
  title?: string;
  description?: string;
  isCompleted?: boolean;
  priority?: 'high' | 'medium' | 'low';
}
