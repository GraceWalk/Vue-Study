import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 10,
    students: [
      {id: 1, name: 'xxx', age: 18},
      {id: 2, name: 'aaa', age: 23},
      {id: 3, name: 'zzz', age: 36},
      {id: 4, name: 'yyy', age: 45}
    ]
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    more20stuL(state, getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      return age => state.students.filter(s => s.age > age)
    }
  },
  actions: {
  },
  modules: {
  }
})
