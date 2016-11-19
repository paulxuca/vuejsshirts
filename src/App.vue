<template>
  <div id="app">
    <navigation />
    <router-view class="contentContainer" />
  </div>
</template>

<script>
import Navigation from './components/Navigation';

export default {
  name: 'app',
  components: {
    Navigation,
  },
};

</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
</style>
