
import { createRouter, createWebHistory } from "vue-router";
import {productList} from '../Composable/ProductList';

import Home from '@/components/Home/HomePage.vue';
import Contact from '@/components/Contact/ContactPage.vue';
import Product from '@/components/Product/ProductList.vue';
import ProductDetail from '@/components/Product/ProductDetail.vue';
import NotFound from '@/components/Authentication/NotFound.vue'
import Login from '@/components/Authentication/Login.vue'
import NoAccess from '@/components/Authentication/NoAccess.vue'

const { isAuthenticated } = productList();

function isLogin() {
    if (isAuthenticated.value) { // true
        return true
    }
    return { name: 'login'}     // false
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home, name: 'home' },
        { path: '/contact', component: Contact, name: 'contact' },
        { path: '/product', component: Product, name: 'product' },
        { path: '/product/:productId', component: ProductDetail, name: 'product-detail', beforeEnter: isLogin },
        { path: '/:pathMacth(.*)*', component: NotFound },
        { path: '/noAccess', component: NoAccess, name: 'noAccess' },
        { path: '/login', component: Login, name: 'login' }
    ],
    linkActiveClass: 'active text-info'
})

export default router;