<template>
  <div id="app">
    <HeaderMain />
    <ContentMain />
  </div>
</template>

<script>
import HeaderMain from "./components/HeaderMain.vue";
import ContentMain from "./components/ContentMain.vue";

export default {
  name: "App",
  components: {
    HeaderMain,
    ContentMain,
  },
};
</script>

<style></style>
