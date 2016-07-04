<template>    
    <div>
      <a v-link="{ path: '/' }">Go to Index</a>
      <a v-link="{ path: '/foo' }">Go to Foo</a>
      <a v-link="{ path: '/bar' }">Go to Bar</a>
    </div>

    <router-view></router-view>
</template>

<script>
import store from './vuex/store'

export default { store }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
