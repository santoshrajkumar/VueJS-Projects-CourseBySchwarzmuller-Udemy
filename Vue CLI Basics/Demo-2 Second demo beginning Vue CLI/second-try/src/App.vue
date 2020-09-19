<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ welcomeMsg }}</h1>
    <ul>
      <li><a href="https://santoshrajkumar.github.io" target="_blank">Homepage</a></li>
      <li><a href="https://density-astm53b.web.app" target="_blank">ASTM 53b Density Converter</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      welcomeMsg: 'Welcome to the trial of Vue App with Vue CLI'
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: violet;
}
</style>
