<template>
  <div class="container mx-auto">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>


<script>
import Header from '@/components/Header.vue'

export default {
    components: {
      Header,
    }
}
</script>


<style lang="scss" scoped>
  .container {
    max-width: 1440px 
  }
</style>