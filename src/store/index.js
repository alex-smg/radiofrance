import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import router from '../router'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userSession: {
        id: '',
      email: '',
      firstname: '',
      lastname: '',
      isToken: false,
    },
    request: {
    },
    count : 0
  },
  mutations: {
    pushDataUserSession(state, data) {
      state.userSession.id = data.id,
      state.userSession.email = data.email,
      state.userSession.firstname = data.firstname,
      state.userSession.lastname = data.lastname,
      state.userSession.isToken = true
    },
    addTeamInUserSession(state, data) {
      state.userSession.teams.push(data);
    },
    addCount(state) {
      state.count += 1;
    },
    lowCount(state) {
      state.count -= 1;
    },
    deleteDataUserSession(state) {
      state.userSession = {}
    },
    deleteTeam(state, id) {
      const team = state.userSession.teams.find(team => team._id === id)
      const index = state.userSession.teams.indexOf(team);
      state.userSession.teams.splice(index, 1);
    },
    populateRequest(state, data) {
      state.request = data;
      state.count = data.length
    },
    addRequest(state, data) {
      state.request.push(data);
    },
    deleteRequest(state, index) {
      state.request.splice(index, 1)
    }
  }, actions: {
    login({commit}, credential) {
      axios.post('http://localhost:3000/person/login', {
        email: credential.email,
        password: credential.password
      }).then((response) => {
        /* eslint-disable */
        if (response.data.isToken) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('isToken', response.data.isToken);
          localStorage.setItem('idPerson', response.data.payload._id);
          commit('pushDataUserSession', response.data.payload);
          router.push({name: `profil`});
        }
      }).catch(function (error) {
        console.log(error);
      });
    },
    populateUserSession({commit}, data) {
      commit('pushDataUserSession', data);
    },
    populateRequest({commit}, data) {
      commit('populateRequest', data);
    },
    addTeam({commit}, data) {
      commit('addTeamInUserSession', data)
    },
    deleteTeam({commit}, id) {
      commit('addTeamInUserSession', id)
    },
    addCount({commit}) {
      commit('addCount')
    },
    lowCount({commit}) {
      commit('lowCount')
    },
    addRequest({commit}, data) {
      commit('addRequest', data)
    },
    deleteRequest({commit}, index) {
      commit('deleteRequest', index)
    },

    logout({commit}) {
      delete localStorage.isToken;
      delete localStorage.token;
      commit('deleteDataUserSession');
      router.push('home');
    }
  }
})

export default store;
