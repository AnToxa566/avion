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


<style lang="scss">
@import './assets/styles/global.scss';

  * {
    font-family: var(--clash);
    font-weight: 400;
    font-size: 16px;

    color: var(--purple);
  }

  .container {
    max-width: 1440px;
  }
</style>