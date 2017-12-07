import Vue from 'vue'
import Hello from './Hello'

new Vue({
  data () {
    return {
      msg: 'world'
    }
  },
  components: {
    Hello
  },
  render (h) {
    return h('hello', {
      props: {
        msg: this.msg
      }
    })
  }
}).$mount('#app')
