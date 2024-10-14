import * as components from './components/index';
import './screens/dashboard';
import { addObserver } from './store/index';
import { appState } from './store/index';

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        addObserver(this);
    }

    connectedCallback() {
        this.render();
        console.log('appSate')
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = '';

        switch (appState.screen) {
            case 'DASHBOARD':
                const dashboard = document.createElement('app-dashboard');
                this.shadowRoot?.appendChild(dashboard);
                break;
                
                default:
                    console.log('Not found');
                    break;
                }
                console.log(appState.screen)
    }
}

customElements.define('app-container', AppContainer);
