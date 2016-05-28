<template>
  <div>
    <h1>{{ msg }}</h1>
    <p><b>Text:</b> {{ getTestText }}</p>
    <input type="text" v-model="text" @keyup.enter="setTestText(text)">
    <button @click="setTestText(text)"> Change text</button>
  </div>
</template>

<script>
// example getter
import { getTestText } from '../vuex/app/getters'

// example action
import { setTestText  } from '../vuex/app/actions'

export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'This is Bar.vue',
      text: ''
    }
  },
  vuex: {
    getters: {
      getTestText
    },
    actions: {
      setTestText
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
