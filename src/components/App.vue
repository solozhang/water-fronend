<template>
  <div id="app">
    <Home></Home>
  </div>
</template>
<script>
  import Home from "./Home";
  export default {
    components: {
      Home
    },
    name: "App"
  };
</script>
<style>
  * {
    padding: 0;
    margin: 0;
  }
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  html,
  body,
  #app,
  .home {
    height: 100%;
  }
  html,
  body {
    overflow: hidden;
  }
</style>
