<template>
  <div id="app">
    <common-header @home="home" :bgColor="bg">
        <span slot="title">{{ title }}</slot></span>
    </common-header>
    <router-view class="content"/>
    <common-footer @change="switchTab" :bgColor="bg"></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/Header'
  import CommonFooter from '@/components/common/Footer'

  export default {
    name: 'App',
    components: {
      CommonFooter,
      CommonHeader
    },
    data () {
        return{
          bg: "rgb(33, 150, 243)",
          title: 'Movie'
        }
    },
    methods: {
      home(){
        this.switchTab("Movie");
        this.$router.push("/");
      },
      switchTab (bottomName){
          this.title = bottomName;
            switch(bottomName){
              case 'Movie' :
                this.bg='rgb(33, 150, 243)';
                break;
              case 'Music' :
                this.bg='rgb(0, 150, 136)';
                break;
              case 'Book' :
                this.bg='rgb(121, 85, 72)';
                break;
              case 'Photo' :
                this.bg='rgb(63, 81, 181)';
                break;
              default:
                this.bg="rgb(33, 150, 243)";
            }
      }
  }


  }


</script>

<style>
.content{
  margin: 1rem 0;
}
</style>
