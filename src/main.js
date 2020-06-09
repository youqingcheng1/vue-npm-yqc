import Vue from 'vue'
import App from './App.vue'
import comments from './lib';

console.log(comments)

Vue.use(comments)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
