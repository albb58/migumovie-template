<template>
  <div id="app">
    <!-- <app-home></app-home> -->
    <main>
      <router-view></router-view>
    </main>
    <app-foot></app-foot>
  </div>
</template>
<script>
import AppFoot from '@component/AppFoot'
import AppHome from '@views/Home/AppHome'
export default {
  name: 'app',
  components: {
    AppFoot,
    AppHome,
  }  
}
</script>

<style lang="scss">
main {
  padding-bottom: 1.333333rem;
 
}
html, body, #app, main {
   height: 100%;
}
</style>
