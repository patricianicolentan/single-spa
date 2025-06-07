import App from './App.vue'
import singleSpaVue from 'single-spa-vue'
import { createApp, h } from 'vue'
import './style.css'

const vueLifecycles = singleSpaVue({
    createApp,
    appOptions: {
        render() {
            return h(App, {
                props: {
                    name: this.name,
                },
            });
        },
    },
    // handleInstance: (app) => {
    //     app.use(router);
    // },
});

const mountVue = () => {
    const app = createApp(App)
    // app.use(router)
    app.mount('#app')
}

// Only mount the app in standard SPA mode during development
if (import.meta.env.MODE === 'development') {
    mountVue();
}

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;