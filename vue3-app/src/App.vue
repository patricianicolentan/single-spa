<template>
  <div class="app">
    <h1>Vue 3 Microfrontend Module</h1>

    <p>
      This microfrontend leverages <strong>Vue 3</strong> and its <em>Composition API</em> to illustrate how modern frontend modules can be developed independently within a shared application ecosystem powered by <strong>Single-SPA</strong>.
    </p>

    <div class="counter-section">
      <p>You have clicked the button <strong>{{ count }}</strong> times.</p>
      <p>This is <strong>{{ evenOrOdd }}</strong>.</p>
      <button @click="count++">Click Me</button>
    </div>

    <p style="margin-top: 2rem;">
      By isolating logic within reusable functions and reactive variables, Vue 3 promotes flexibility and scalability—traits that align naturally with microfrontend architecture.
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const count = ref(0);
const evenOrOdd = computed(() => (count.value % 2 === 0 ? 'an even number' : 'an odd number'));
</script>

<style scoped>
.app {
  max-width: 800px;
  margin: 60px auto;
  padding: 0 20px;
  font-family: 'Segoe UI', sans-serif;
  color: #333;
  line-height: 1.6;
}

h1 {
  color: #1a73e8;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.counter-section {
  margin-top: 20px;
  border-top: 1px solid #ddd;
  padding-top: 20px;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 4px;
}

button:hover {
  background-color: #155ab6;
}
</style>
