<template>
  <div id="app">
   <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    show () {
      let scre = document.body.clientWidth
      console.log('score', scre)
      if (scre <= 960) {
        this.$router.push({
          name: 'mobile'
        })
      } else {
        this.$router.push({
          name: 'computer'
        })
      }
    }
  },
  created () {
    this.show()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
