<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo_small.png">
    <Menu msg="Personaliza tu pastel"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'

export default {
  name: 'HomeView',
  components: {
    Menu
  }
}
</script>

<style scoped>
img{
  width: 20%;
}
</style>
