<template>
  <div id="app">
    <Header/>



<!--     Main content area where routed components will appear-->
    <main>
      <router-view></router-view> <!-- Vue Router renders the active component here -->
    </main>
    <Footer/>

  </div>
</template>

<script>
import Home from "@/views/Home.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'App',
  components: {Header, Home, Footer}
}
</script>


<style scoped>



</style>


