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
export default {
  name: "Roomlio",
  mounted() {
    if (!window.rmlLoaded) {
      window.rmlLoaded = true;
      window.rmlCalls = [];

      let rml = function rml() {
        window.rmlCalls.push(arguments);
      };

      window.rml = rml;

      let s = document.createElement("script");
      s.setAttribute("src", "http://embed.roomlio-dev.com:5000/embed.js");
      document.body.appendChild(s);
    }

    window.rml("register", {
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
