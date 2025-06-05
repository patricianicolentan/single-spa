<template>
  <div class="app">
    <h1>Hello from Vue-App!</h1>
    <p>This is a minimal single-spa Vue 2 microfrontend.</p>
    <button @click="count++">Clicked {{ count }} times</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  padding: 20px;
  color: #34495e;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}
</style>
