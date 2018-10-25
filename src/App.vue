<template>
  <div id="app">
    <ab></ab>
    <bb></bb>
  </div>
</template>

<script>
import ab from './components/ab.vue'
import bb from './components/bb.vue'

export default {
  name: 'app',
  components: {
    ab, bb
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
