<template>
  <div class="navbar-container">
    <nav class="navbar">
      <router-link class="link" to="/">Home</router-link>

      <router-link class="link" to="/form">Form</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import Form from './components/Form.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Form,
    Home
  }
}
</script>

<style>
.navbar-container {
  display: flex;
  justify-content: center;
}

.navbar {
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
  font-family: Monseratt, sans-serif;
}

.link {
  border: 1px solid cornflowerblue;
  border-radius: 0.3rem;
  font-size: 18px;
  text-decoration: none;
  padding: 0.5rem;
  transition-duration: 0.3s;
}

.link:hover {
  background-color: cornflowerblue;
  color: #E3EDF8;
}

</style>