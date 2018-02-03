<template>
  <!--<div>-->
    <!--<common-header bgColor="rgb(0, 150, 136)">-->
      <!--<span slot="title">Music</span>-->
    <!--</common-header>-->
    <!--<common-footer bgColor="rgb(0, 150, 136)"></common-footer>-->
  <!--</div>-->
  <ul>
    <li class="music" v-for="item in musicAlbums" :key="item.id">
      <router-link :to="'/musicAlbums/' + item.id">
        <img :src="item.bg" alt="">
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
export default {
  created(){
    axios.get('/static/data/musiclist.json').then(res=>{
      this.musicAlbums = res.data.albums
    })
  },
  data(){
    return {
      musicAlbums: []
    }
  }
}

</script>

<style scoped>
  .music{
    width: 50%;
    float: left;
  }

  .music img{
    width: 100%;
  }
</style>
