<template>
  <div id="page-top" class="index">
	<header-component></header-component>
	<div class="container">
		<router-view></router-view>
	</div>
    
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue'
export default {
  name: 'app',
  components:
  {
	HeaderComponent
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
