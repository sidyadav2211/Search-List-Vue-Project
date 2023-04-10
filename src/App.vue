<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div class="block-content">
 <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>

</div>
  <router-view></router-view>
</template>

<script>
// import Home from '@/components/Home';
//  import About from '@/components/About';
export default {
  name: 'App',
  components: { },
  data() {
    return {
      name:'sid',
      
      
    }
  },
 
  }


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
