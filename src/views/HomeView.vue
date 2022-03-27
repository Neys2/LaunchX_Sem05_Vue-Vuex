<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Inicio msg="Personaliza tu pastel"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Inicio from '@/components/Inicio.vue'

export default {
  name: 'HomeView',
  components: {
    Inicio
  }
}
</script>
