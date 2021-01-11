<template>
  <div id="app">
    <common-header></common-header>
    <div class="containter">
      <router-view/>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from './components/CommonHeader'
import CommonFooter from './components/CommonFooter'
export default {
  components:{
    CommonHeader,
    CommonFooter
  }
}
</script>

<style lang="scss">
.containter{
  margin: 40px 0;
}
</style>
