<template>
  <div id="app">
    <dataButton></dataButton>
  </div>
</template>

<script>
import dataButton from "./components/getDataButton";

export default {
  name: "App",
  components: {
    dataButton
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
