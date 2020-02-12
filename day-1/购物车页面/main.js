const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2019-1-7',
        price: 45,
        count: 1
      },
      {
        id: 2,
        name: '《编程珠玑》',
        date: '2019-1-9',
        price: 26,
        count: 1
      },
      {
        id: 3,
        name: '《JavaScript权威指南》',
        date: '2019-2-8',
        price: 79,
        count: 1
      },
      {
        id: 4,
        name: '《iPad 2018》',
        date: '2019-3-6',
        price: 29,
        count: 1
      },
      {
        id: 5,
        name: '《罗技键盘》',
        date: '2019-5-7',
        price: 68,
        count: 1
      }
    ]
  },
  methods: {
    increment(index) {
      return this.books[index].count++
    },
    decrement(index) {
      return this.books[index].count--
    },
    removeBook(index) {
      this.books.splice(index, 1)
    }
  },
  computed: {
    totalPrice() {
      return this.books.reduce((preValue, book) => preValue + book.price * book.count, 0)
    }
  },
  filters: {
    showPrice(price) {
      return `￥${price.toFixed(2)}`
    }
  }
})