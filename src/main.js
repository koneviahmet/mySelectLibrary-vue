import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './assets/index.css'
import store from "./store";
import can from './directives/can'
import VueExcelEditor from 'vue3-excel-editor'


const app = createApp(App);
app.directive('can', can)
app.use(VueExcelEditor);
app.use(router);
app.use(store);
app.mount('#app')
