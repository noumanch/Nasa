<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Nasa</span>
        <span class="font-weight-light"> Image gallery</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-avatar>
        <img src="./assets/nasaLogo.png" alt="">
      </v-avatar>
    </v-toolbar>
    <Home/>
  </v-app>
</template>
<style>

</style>

<script type="text/javascript">
import Home from "./views/Home"
export default{
  components:{
    Home
  },
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
