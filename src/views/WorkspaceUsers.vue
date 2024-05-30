<template>
  <div>
    <NavigationBar />
    <RouterView />
  </div>
</template>

<script setup>
import NavigationBar from './NavigationBar.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped></style>
