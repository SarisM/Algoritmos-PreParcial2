import { addObserver, appState } from "../store/index"; // Observamos los cambios del estado
import '../components/task-form/taskForm'; // Importa el componente del formulario
import '../components/task-list/taskList'; // Importa el componente de la lista de tareas

class Dashboard extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        // Suscribir el componente a los cambios en el estado global
        addObserver(this);
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (!this.shadowRoot) return;

        this.shadowRoot.innerHTML = `
            <style>
                .dashboard {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    padding: 20px;
                    background-color: #f0f0f0;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    min-height: 100vh;
                    align-items: center;
                    justify-content: center;
                }
                task-form, task-list {
                    max-width: 600px;
                    width: 100%;
                }
                h1 {
                    text-align: center;
                    color: #333;
                    font-family: 'Arial', sans-serif;
                }
            </style>
            <div class="dashboard">
                <h1>Task  Dashboard</h1>
                <task-form></task-form> <!-- Formulario para agregar nuevas tareas -->
                <task-list></task-list> <!-- Lista de tareas actuales -->
            </div>
        `;
    }
}

customElements.define('dashboard-component', Dashboard);
export default Dashboard;
