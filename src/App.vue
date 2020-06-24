<template>
  <div id="app">
    <Navbar @open-modal="openModal"/>
    <Login  v-if="modal === true" />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
export default {
  name: 'App',
  components: {
    Navbar,
    Login
  },
  data() {
    return {
      modal: false
    }
  },
  methods: {
    openModal: function () {
      console.log('test');
      this.modal = true;
    }
  }

}
</script>

<style lang="scss">
  * {
    font-family: sans-serif;
    color: #262623;
    margin: 0;
    padding: 0;
  }

  .tallTitle {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 200;
  }
#app {
  .btn-primary {
      background: transparent;
      text-transform: uppercase;
      border-radius: 10px;
      padding: 13px 60px;
      border: 1.5px solid #262623;
      margin: auto;
      display: block;
      font-size: 18px;
  }
  .title {
    width: 100%;
    margin-bottom: 10px;

    h3 {
      margin-bottom: 15px;
      font-weight: 200;
      text-transform: uppercase;
    }
  }

}
</style>
