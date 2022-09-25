<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main id="main-container">
    <TheWelcome />
  </main>
</template>

<style scoped>
#main-container {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>