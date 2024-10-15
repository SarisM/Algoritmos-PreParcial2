// Define el tipo Task basado en la estructura de una tarea en AppState
export type Task = {
    uid: number;
    utitle: string;
    description: string;
    completedTask: boolean;
};

// AppState ahora usará este tipo Task en lugar de repetir la definición
export type AppState = {
    screen: string;
    tasks: Array<Task>;
    completedTask: boolean;
};

export type Observer = { render: () => void } & HTMLElement;

export enum Actions {
    ADD_TASK = 'ADD_TASK',
    DELETE_TASK = 'DELETE_TASK',
    MARK_AS_COMPLETED = 'MARK_AS_COMPLETED',
};
