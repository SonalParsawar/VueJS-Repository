<template>
  <div class="home">
    <router-link to="/helloworld"><img alt="Vue logo" src="../assets/logo.png"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    //HelloWorld
  },
  watch:{

  }
}
</script>
