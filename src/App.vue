<template>
  <div class="bg-gray-100 dark:bg-gray-800 dark:text-gray-50">
    <Header />
      <div class="container px-5 py-24 mx-auto">
        <router-view></router-view>
      </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
</script>