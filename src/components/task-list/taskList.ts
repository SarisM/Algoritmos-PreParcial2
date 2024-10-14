import { appState, dispatch } from "../../store/index";
import { Task } from "../../types/tasks";

class TaskList extends HTMLElement {
    tasks: Task[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        appState.subscribe(() => this.updateTasks());
    }

    updateTasks() {
        // Actualiza las tareas cuando cambie el estado
        this.tasks = appState.getState().tasks;
        this.render();
    }

    render() {
        if (!this.shadowRoot) return;

        this.shadowRoot.innerHTML = `
            <style>
                .task-list {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
            </style>
            <div class="task-list"></div>
        `;

        const taskListContainer = this.shadowRoot.querySelector('.task-list');

        if (taskListContainer) {
           
            taskListContainer.innerHTML = '';

            this.tasks.forEach(task => {
                const taskItem = document.createElement('task-item');
                taskItem.setAttribute('uid', task.uid.toString());
                taskItem.setAttribute('utitle', task.utitle);
                taskItem.setAttribute('description', task.description);

                taskListContainer.appendChild(taskItem);
            });
        }
    }
}

customElements.define('task-list', TaskList);
export default TaskList;
