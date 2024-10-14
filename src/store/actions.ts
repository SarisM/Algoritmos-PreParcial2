import { Actions } from './../types/tasks';

export const addTask = (payload: any) => {
    return {
        action: Actions.ADD_TASK,
        payload: payload,
    };
};

export const deleteTask = (payload: number) => {
    return {
        action: Actions.DELETE_TASK,
        payload: payload, 
    };
};


// Acción para completar/alternar tarea
export const markAsCompleted = (taskId: number) => {
    return {
        action: Actions.MARK_AS_COMPLETED,
        payload: taskId, 
    };
};
