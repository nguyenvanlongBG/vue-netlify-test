const routes = [
    {
        path: '',
        name: "home",
        component: () => import ('../components/HelloWorld.vue')
    }, {
        path: '/ok',
        name: "ok",
        component: () => import ('../components/OKComponent.vue')
    },

]
export default routes
