<template>
<div>
  <div class="container" v-for="check in getImages">
    <div class="row" v-if="check != null">
        <img :src="check" alt="">
    </div>
  </div>
</div>
</template>


<style media="screen">
  .home{
    margin-top: 10vh;
  }
  .main{
    display: inline!important;
  }
  img{
    width: 30vw;
    height: 40vh;
  }
</style>
<script>
  export default {
    data(){
  return{
   }
},
  computed:{
    getInfo(){
      return this.$store.state.info;
    },
    getCenterInInfo(){
      //console.log(this.$store.state.info.map(data=>data.data.map(item=>item.center)));
      return this.$store.state.info.map(data=>data.data.map(item=>item.center));
    },
    getImages(){
    return this.$store.state.info.map(data=>{

        if(data.links != undefined){
            let allimg = data.links[0].href;

            if(allimg.includes('/image/')){
              return allimg
            } else {
              return null
            }
            // let imgSplit = allimg.split(" ");
            // let empty = [];
            // if(imgSplit.length == 1 && imgSplit != undefined){
            //   empty.push(imgSplit)
            // }
            //
            // // console.log(imgSplit)
            // console.log(empty[0])
            // return empty[0];
            // return data.links[0].href;
          } else {
            return null
          }
      });
    }
  },
  mounted(){
  },
}
</script>
