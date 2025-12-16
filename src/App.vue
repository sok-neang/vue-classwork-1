<template>
  <div>
    <Header></Header>
      <main>
        <router-view></router-view>
      </main>
    <Footer></Footer>
  </div>
</template>

<script setup>
  import Header from './components/Layout/Header.vue';
  import Footer from './components/Layout/Footer.vue';
</script>

<style scoped>

</style>
