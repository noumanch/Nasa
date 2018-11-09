<template>
  <div class="container home">
    <div class="row">
      <div class="" v-for="check in getImages">
        <div class="card shadow-lg p-3 mt-5 m-2" v-if="check != null">
            <img class="card-img-top img" :src="check" alt="">
            <div class="card-block" v-for="">
              <h4 class="card-title">{{item}}</h4>
              <a href="#" class="btn btn-primary">More Info</a>
            </div>
        </div>
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
  .img{
    width: 30vw !important;
    height: 40vh !important;
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
      return this.$store.state.info.map(data=>data.data.map(item=>item.title));
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
