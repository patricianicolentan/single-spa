<template>
  <div class="app">
    <h1>Vue 2 Microfrontend Module</h1>
    <p>
      This microfrontend demonstrates a self-contained
      <strong>Vue 2</strong> application integrated within a modular system
      using <strong>Single-SPA</strong>.
    </p>

    <p>
      Vue 2's <em>Options API</em> is used here to illustrate basic reactivity,
      data binding, and computed values.
    </p>

    <div class="counter-section">
      <p>
        You have clicked the button <strong>{{ count }}</strong> times.
      </p>
      <p>
        This is <strong>{{ evenOrOdd }}</strong
        >.
      </p>
      <button @click="count++">Click Me</button>
    </div>

    <p style="margin-top: 2rem">
      As a microfrontend, this module can be independently developed, versioned,
      and reused across different host applications without requiring any
      knowledge of the parent framework.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    evenOrOdd() {
      return this.count % 2 === 0 ? "an even number" : "an odd number";
    },
  },
};
</script>

<style scoped>
.app {
  max-width: 800px;
  margin: 60px auto;
  padding: 0 20px;
  font-family: "Segoe UI", sans-serif;
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
