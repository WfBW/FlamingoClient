import Vue from 'vue';
import vueRouter from 'vue-router';

Vue.use(vueRouter);

//Pages
import splashScreen from './pages/splashScreen';

export default new vueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: splashScreen
        }
    ]
});