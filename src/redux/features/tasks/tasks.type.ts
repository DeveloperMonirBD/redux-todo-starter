export type TTaskStatus = 'pending' | 'in-progress' | 'done';
export type TTaskPriority = 'low' | 'medium' | 'high';

export interface ITask {  // Object
    id: string;
    title: string;
    description: string;
    priority: TTaskPriority;
    status: TTaskStatus;
    createdAt: number;
    updatedAt: number
}

export type TinitialState = ITask[];  // Array of ITask/Object
