export default {
  name: 'hello',
  props: {
    msg: {
      required: true,
      type: String
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'hello-world'
    }, [
      h('img', {
        attrs: {
          src: './assets/logo.png'
        }
      }),
      h('h3', 'Welcome to ' + this.msg)
    ])
  }
}