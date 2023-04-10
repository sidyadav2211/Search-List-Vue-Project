import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 
import PrimeVue from 'primevue/config';

import 'primeflex/primeflex.css';
import 'primevue/resources/themes/lara-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup'; // optional
import Row from 'primevue/row';  
import Paginator from 'primevue/paginator';
import InputText from 'primevue/inputtext';
import Image from 'primevue/image';

const app= createApp(App)
app.use(router)
app.use(PrimeVue, { ripple: true })
app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);
app.component('KButton', Button);
app.component('KCard', Card);
app.component('KDivider', Divider);
app.component('KDataTable', DataTable);
app.component('KColumn', Column);
app.component('KColumnGroup', ColumnGroup);
app.component('KRow', Row);
app.component('KPaginator', Paginator);
app.component('KInputText', InputText);
app.component('KImage', Image);






app.mount('#app');