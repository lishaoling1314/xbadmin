<template>
 <ul>
   <li @click="x=1">111</li>
   <li @click="x=2">222</li>
   <li>{{reversedMessage}}</li>
 </ul>
</template>

<script>
export default {
  data(){
    return{
        message:'Runoob!',
        x:1,
    }
  },
  computed:{
    reversedMessage:function(){
      if(this.x==1){
        console.log(111);
      }else{
        console.log(222);
      }
      return this.x;
    }
  }
}
</script>

<style scoped>
ul li{ cursor: pointer;}
</style>