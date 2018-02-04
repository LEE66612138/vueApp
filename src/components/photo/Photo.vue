<template>
  <!--<div>-->
    <!--<common-header bgColor="rgb(63, 81, 181)">-->
      <!--<span slot="title">Photo</span>-->
    <!--</common-header>-->
    <!--<common-footer bgColor="rgb(63, 81, 181)"></common-footer>-->
  <!--</div>-->
  <ul>
    <li class="photo" v-for="(item,index) in photoDetail" :key="index">
      <router-link :to="'/photoDetail/' + index">
        <img :src="item.src" alt="">
      </router-link>
    </li>
  </ul>
</template>

<script>
//  import CommonHeader from '@/components/common/Header'
//  import CommonFooter from '@/components/common/Footer'
//  export default {
//    components: {
//      CommonHeader,
//      CommonFooter
//    }
//  }
import axios from 'axios'
  export default{
    created(){
      axios.get('/static/data/photodata.json').then(res=>{
          console.log(res)
        this.photoDetail = res.data.photoData

      })
    },
    data(){
        return{
          photoDetail: []
        }
    }
  }

</script>

<style scoped>

  li{
    width: 50%;
    float: left;
  }
</style>
