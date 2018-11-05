<template>
  <div id="app">
    <div id="nav">
      <div class="header">
          <img id="logo" src="./assets/nasaLogo.png" alt="" height="130vh">
          <img id="topImage" src="./assets/blackhole.jpg" alt="">
      </div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>

  </div>
</template>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#topImage{
  width: 100%;
  margin-top: -20vh;
  height: 70vh
}
#logo{
  position: fixed;
  margin-left: 57vw;
}
</style>
<script type="text/javascript">
export default{
  data(){
    return{
      info: []
    }
  },
  created(){
    this.nasaData()
  },
  methods:{
    nasaData(){

    fetch(`https://images-api.nasa.gov/search?q=moon&year_start=2018`)
    .then(function(data){
      return data.json()
    })
    .then(myData => {
      this.info = myData.collection.items;
      console.log(this.info)
      this.$store.commit('getInfo',this.info);
    })
    }


  }

}

</script>
