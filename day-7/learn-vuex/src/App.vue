<template>
  <div id="app">
    <div>{{ this.$store.state.counter }}</div>
    <div>{{ this.$store.getters.powerCounter }}</div>
    <button @click="add">+</button>
    <button @click="minus">-</button>
    <div>{{this.$store.getters.more20stu }}</div>
    <div>{{this.$store.getters.more20stuL }}</div>
    <div>{{this.$store.getters.moreAgeStu(37) }}</div>
    <counter/>
    <counter/>
    <counter/>
  </div>
</template>

<script>
  import counter from './components/Counter'

  export default {
    name: 'App',
    components: {
      counter
    },
    methods: {
      add() {
        this.$store.commit('increment')
      },
      minus() {
        this.$store.commit('decrement')
      }
    }
  }
</script>