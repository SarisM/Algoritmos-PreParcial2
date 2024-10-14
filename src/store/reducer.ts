import { Actions } from "../types/tasks";

// El reducer ahora maneja las acciones de completar y eliminar tareas
export const reducer = (currentAction: any, currentState: any) => {
    const { action, payload } = currentAction;

    switch (action) {
        case Actions.ADD_TASK:
            return {
                ...currentState,
                cart: [...currentState.cart, payload],
            };

        case Actions.DELETE_TASK:
            const filteredTask = currentState.task.filter((item: any) => item.uid !== payload);
            return {
                ...currentState,
                cart: filteredTask,
            };


        case Actions.MARK_AS_COMPLETED: 
            return {
                ...currentState,
                tasks: currentState.tasks.map((task: any) =>
                    task.id === payload ? { ...task, completed: !task.completed } : task
                ),
            };
    }
};
