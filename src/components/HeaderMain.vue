<template>
  <header class="main-header">
    <h1>Francais</h1>
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