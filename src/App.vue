<template>
  <div id="app">
    <Navbar @open-modal="openModal"/>
    <Login @close-modal="closeModal" v-if="modal === true" />
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
      this.modal = true;
    },
    closeModal: function () {
      this.modal = false
    }
  }

}
</script>

<style lang="scss">
  @font-face {
    font-family: "NeueMachina light";
    src: url("./assets/font/NeueMachina-Light.otf") format("otf");
  }
  @font-face {
    font-family: "NeueMachina regular";
    src: url("./assets/font/NeueMachina-Regular.otf") format("otf");
  }
  * {
    font-family: "NeueMachina light";
    color: #262623;
    margin: 0;
    padding: 0;
    outline: none;
  }



  .tallTitle {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 200;
  }
#app {
  hr {
    height: 1.5px;
    border: none;
    background: #161616;
  }
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
  .btn_secondary {
    background-color: transparent;
    border: none;
    transition: 0.5s;
    cursor: pointer;
    display: block;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 30px;
    &:hover {
      color: #67046B;
    }
  }
  .title {
    width: 100%;
    margin-bottom: 10px;
    h3 {
      margin-bottom: 15px;
      font-weight: 200;
      text-transform: uppercase;
    }
    hr {
      height: 1.5px;
      border: none;
      background-color: #161616;
    }
  }

}
</style>
