import { Actions } from "../types/tasks";

export const reducer = (currentAction: any, currentState: any) => {
    const { action, payload } = currentAction;

    switch (action) {
        case Actions.ADD_TASK:
            return {
                ...currentState,
                tasks: [...currentState.tasks, payload], 
            };

        case Actions.DELETE_TASK:
            const filteredTask = currentState.tasks.filter((item: any) => item.uid !== payload); 
            return {
                ...currentState,
                tasks: filteredTask,
            };

        case Actions.MARK_AS_COMPLETED: 
            return {
                ...currentState,
                tasks: currentState.tasks.map((task: any) =>
                    task.uid === payload ? { ...task, completedTask: !task.completedTask } : task 
                ),
            };
        default:
            return currentState; 
    }
};
