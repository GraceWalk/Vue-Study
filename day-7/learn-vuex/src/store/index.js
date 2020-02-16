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
  //payload commit

  //给新添加的数据添加到响应式系统 Vue.set()  push/pop/unshift/shift
  //删除shuju  delete state   做不到响应式
  //Vue.delete 响应式

  //变量抽成常量  export const INCREMENT = 'increment'   mutations中 [INCREMENT](state)
  mutations: {  //必须是同步方法， 异步操作在devtools中无法跟踪数据的变化 界面变化  数据不显示便阿虎
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementNum(state, payload) {
      state.counter += payload
    },
    addSome(state, payload) {
      Vue.set(state.students, 4, payload)
      Vue.delete(state.students, 0)
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
  actions: {  //替代mutations用来执行异步操作 this.$store.dispatch()
    test(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(payload)
          context.commit('addSome', payload)
          resolve('11111')
        }, 1000)
      })
    }
  },
  modules: {
  }
})
