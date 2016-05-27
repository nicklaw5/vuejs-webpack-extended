<template>
  <div id="app">
    <hello></hello>
  </div>
</template>

<script>
import store from './vuex/store'
import Hello from './components/Hello'

// example getter
import { getTestText } from './vuex/app/getters'

// example action
import { setTestText  } from './vuex/app/actions'

export default {
  store,
  getters: {
    getTestText
  },
  actions: {
    setTestText
  },
  components: {
    Hello
  }
}
</script>

<style scoped>

</style>
