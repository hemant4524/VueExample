<template>
  <div id="app">
    <router-link v-if="loggedIn" to="/logout">Log out</router-link>
    <router-link v-if="!loggedIn" to="/login">Log in</router-link>
    <router-link to="/">home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/coins/ethereum">Ethereum</router-link>
    <router-link to="/coins/bitcoin">Bitcoin</router-link>
    <router-view/>
  </div>
</template>

<script>
import auth from './auth'
export default {
  name: 'App',
  data () {
    return {
      loggedIn: auth.loggedIn()
    }
  },
  created () {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
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

