<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar';
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
#app {
  .btn-primary {
    background-color: #0078D7;
    color: #FFFFFF;
    width: max-content;
    padding: 8px 50px;
    border-radius: 20px;
    border: none;
  }

}
</style>
