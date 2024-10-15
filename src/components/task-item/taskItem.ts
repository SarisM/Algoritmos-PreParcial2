import { dispatch } from "../../store/index";
import { deleteTask } from "../../store/actions";

export enum Attribute {
    'uid' = 'uid',
    'utitle' = 'utitle',
    'description' = 'description',
}

class TaskItem extends HTMLElement {
    uid?: any;
    utitle?: string;
    description?: string;

    static get observedAttributes() {
        return Object.keys(Attribute);
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

   
    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
        if (propName === Attribute.uid) {
            this[propName] = newValue ? Number(newValue) : undefined;
        } else {
            this[propName] = newValue
        }
        this.render();
    }


    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <div class="task-item">
                    <div class="item-info">
                        <h2>${this.getAttribute('utitle')}</h2>
                        <p>${this.getAttribute('description')}</p>
                    </div>
                    <button class="delete-btn">Delete</button>
                    <button class="completed-task">task completed</button>
                </div>
            `;

            //eliminar tarea
            const deleteBtn = this.shadowRoot.querySelector('.delete-btn');
            deleteBtn?.addEventListener('click', () => {
                const item = {
                    uid: this.uid,
                    utitle: this.utitle,
                    description: this.description,
                };
                console.log('Item details:', item); 
                dispatch(deleteTask(Number(this.uid))); 
            });
        }
    }
}

customElements.define('task-item', TaskItem);
export default TaskItem;
