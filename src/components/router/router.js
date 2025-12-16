
import { createRouter, createWebHistory } from "vue-router";
import Home from '@/components/Home/HomePage.vue';
import Contact from '@/components/Contact/ContactPage.vue';
import Product from '@/components/Product/ProductList.vue';
import ProductDetail from '@/components/Product/ProductDetail.vue';
import NotFound from '@/components/Authentication/NotFound.vue'
import Login from '@/components/Authentication/Login.vue'

import {productList} from '../Composable/ProductList';
const { isAuthenticated } = productList(); // call from Composable to use in this page

function isLogin() {
    if (isAuthenticated.value) { // true -> it mean login already
        return true
    }
    return { name: 'login'}     // false -> it mean login not yet
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home, name: 'home' },
        { path: '/contact', component: Contact, name: 'contact' },
        { path: '/product', component: Product, name: 'product' },
        { path: '/product/:productId', component: ProductDetail, name: 'product-detail', beforeEnter: isLogin }, // isLogin = true
        { path: '/:pathMacth(.*)*', component: NotFound },
        { path: '/login', component: Login, name: 'login' }
    ],
    linkActiveClass: 'active text-info'
})

export default router;