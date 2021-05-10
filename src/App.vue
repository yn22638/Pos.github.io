<template>
  <div id="app">

    <leftNav/>
    <router-view/>
    <!-- <i class="icon iconfont icon-canyin"></i> -->
  </div>
</template>

<script>
import leftNav from './components/common/leftNav'
export default {
  name: 'App',
  components:{
    leftNav,
  }
}
</script>

<style>

</style>
