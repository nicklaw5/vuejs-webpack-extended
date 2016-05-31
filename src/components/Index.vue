<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
  <div>
    <h3>HTTP GET RESPONSE:</h3>
    <pre>{{ $data.httpResponse | json }}</pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'This is Index.vue',
      httpResponse: {}
    }
  },
  ready() {
    // GET request
    this.$http.get('https://httpbin.org/get').then(function (response) {

      this.$set('httpResponse', response.data)
      console.log(response);

    }, function (response) {
      console.log(response)
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
