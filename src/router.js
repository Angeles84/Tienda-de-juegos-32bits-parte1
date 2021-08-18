import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () => import('./components/Inicio')
const Busqueda = () => import('./components/BusquedaJuegos')

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Inicio
        }, 
        {
            path: '/inicio',
            redirect: '/'
        }, 
        {
            path: '',
            redirect: '/'
        },
        {
            path: '/busqueda',
            name: 'busqueda',
            component: Busqueda
        }, 
    ]
})