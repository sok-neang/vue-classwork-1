<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-5">
                <div class="card p-5 mt-5 bg-info-subtle">
                    <h2>Login Form</h2>
                    <form class="mt-4" @submit.prevent="Login">
                        <label for="">Email : </label>
                        <input type="email" class="w-100" v-model.lazy="email_input"><br><br>

                        <label for="">Password : </label>
                        <input type="password" class="w-100" v-model.lazy="pass_input">

                        <div class="mt-5 d-flex justify-content-end">
                            <button type="submit" class="btn btn-info text-light">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useRouter, useRoute } from 'vue-router'
    import { productList } from '../Composable/ProductList';
    import { ref } from 'vue';
    let router = useRouter();
    let route = useRoute();
    const { isAuthenticated } = productList();


    let email_input = ref("");
    let pass_input = ref(null);

    function Login(e) {
        e.preventDefault()

        if (email_input.value != "" && Number(pass_input.value) != "") {
            isAuthenticated.value = true
            router.push('/product')   
        }
    }

</script>


<style scoped>
    input{
        height: 40px;
        border-radius: 5px;
        border: 1px solid gray;
    }
    input:focus{
        border: none;
        outline: 2px solid skyblue;
        box-shadow: 2px 0 1px 2px rgb(123, 253, 255);
        border-radius: 5px;
        background-color: rgb(206, 255, 239);
    }
</style>