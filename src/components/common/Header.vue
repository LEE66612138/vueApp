<template>
  <div class="header" :style="{background:bgColor}">
    <span class="home" @click="$emit('home')">首页</span>
    <h1 class="title">
      <slot name="title">错误</slot>
    </h1>
  </div>
</template>

<script>
  export default{
      props: ['bgColor']
  }
</script>

<style scoped>
  .header{
    background: #00f;
    height: 1rem;
    position: fixed;
    top: 0;
    width: 100%;
  }
  .header .title{
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .header .home{
    color: #fff;
    line-height: 1rem;
    margin-left: 0.1rem;
  }
</style>
