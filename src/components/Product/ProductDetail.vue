<template>
    <div class="container mt-5">
        <div class="row d-flex justify-content-center">
            <div class="col-8">
                <div class="card rounded-3 overflow-hidden">
                    <img :src="image_detail" alt="" height="400px">
                    <div class="card-body">
                        <h5 class="card-title">{{title_detail}}</h5>
                        <p>{{description_detail}} </p>
                    </div>
                    <div class="card-footer py-3 d-flex justify-content-between">
                        <p>{{price_detail}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {ref, reactive} from 'vue';
    import {useRoute} from 'vue-router';
    import {productList} from '../Composable/ProductList.js'

    const route = useRoute();
    const {ProductList} = productList();
    
    let pro_id = route.params.productId;

    let title_detail = ref(null);
    let description_detail = ref(null);
    let price_detail = ref(null);
    let image_detail = ref(null);

    //find product detail
    ProductList.forEach(element => {
        if(pro_id == element.id){
            title_detail.value = element.title;
            description_detail.value = element.description;
            price_detail.value = element.price;
            image_detail.value = element.image;
        }
    });


</script>
