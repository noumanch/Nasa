<template>
  <div class="home">
     <div v-for="item in getInfo">
          <div v-for="data in item.data">
            <p>Center: {{data.center}}</p>
            <p>Description: {{data.description}}</p>
          </div>
    </div>
<div v-for="item in getCenterInInfo">
  <p>{{item}}</p>
</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {

  data(){
    return{

    }
  },
  computed: {
    getInfo(){
      return this.$store.state.info;
    },
    getCenterInInfo(){
        return this.$store.state.info.map(data=>data.data.map(item=>item.center));
    }
  }
}
</script>
<style media="screen">

</style>
