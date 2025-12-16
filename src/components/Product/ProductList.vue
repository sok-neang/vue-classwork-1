<template>
    <div class="container mt-5">
        <div class="row g-5">
            <div class="col-4"  v-for="item in ProductList" :key="item.id">
                <router-link class="nav-link" :to="{name: 'product-detail', params: {productId: item.id}}">
                    <div class="card rounded-3 overflow-hidden">
                        <img :src="item.image" alt="" height="370px">
                        <div class="card-body">
                            <h5 class="card-title">{{item.title}}</h5>
                            <p>{{item.description}} </p>
                        </div>
                        <div class="card-footer py-3 d-flex justify-content-between">
                            <p>{{item.price}}</p>
                            <button class="btn btn-primary">View</button>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {productList} from '../Composable/ProductList'
    const {ProductList} = productList();  // call from Composable to use in this page

</script>
