<template>
  <div id="app">
    <div>{{ this.$store.state.counter }}</div>
    <!-- <div>{{ this.$store.getters.powerCounter }}</div> -->
    <button @click="add">+</button>
    <button @click="minus">-</button>
    <button @click="addFive">+5</button>
    <button @click="addTen">+10</button>
    <!-- <div>{{this.$store.getters.more20stu }}</div>
    <div>{{this.$store.getters.more20stuL }}</div>
    <div>{{this.$store.getters.moreAgeStu(37) }}</div> -->
    <div> {{ this.$store.state.students }}</div>
    <button @click="addSome">修改信息</button>
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
      },
      addFive() {
        this.$store.commit('incrementNum', 5)
      },
      addTen() {
        this.$store.commit('incrementNum', 10)
      },
      addSome(){
        this.$store.dispatch('test', {
          id: 1, name: 'zzzz', age: 20
        }).then(res => console.log(res))
        // this.$store.commit('addSome', {
        //   id: 1, name: 'zzzz', age: 20
        // })
      }
    }
  }
</script>