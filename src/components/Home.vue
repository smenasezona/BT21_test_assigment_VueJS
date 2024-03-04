<template>
  <div class="home-container">
    <h1 class="title">Home page</h1>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Monseratt, sans-serif;
}
</style>