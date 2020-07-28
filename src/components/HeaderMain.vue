<template>
  <header class="main-header">
    <h1>Francais</h1>
    <nav class="nav">
      <ul>
        <li><router-link to="/news">News</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderMain",
};
</script>

<style scoped>
.main-header {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 8px 16px;
  border-bottom: 1px solid lightgray;
}

h1 {
  text-transform: uppercase;
  color: darkred;
}
</style>
