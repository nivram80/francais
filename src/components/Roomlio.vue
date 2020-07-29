<template>
  <div class="roomlio-container">
    <div
      data-rml-room
      data-rml-version="09.mar.2020"
      data-rml-pk="bnl8ln7budgo8g1bs1vg"
    />
  </div>
</template>

<script>
import { rml } from "../roomlio";

export default {
  name: "Roomlio",
  mounted() {
    window.rmlCalls = window.rmlCalls || [];

    rml("register", {
      apiName: "register",
      roomKey: "Todd_Nichols_new_room",
      roomName: "Nuckles Inc",
    });
  },
};
</script>

<style scoped>
.roomlio-container {
  width: 100%;
  height: 600px;
  border: 1px solid white;
}
</style>
