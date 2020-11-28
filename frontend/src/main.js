import Vue from 'vue'
import 'font-awesome/css/font-awesome.css'

import App from './App'
import './config/msgs'
import store from './config/store'
import './config/bootstrap'
import router from './config/router'

Vue.config.productionTip = false

require('axios').defaults.headers.common['Authorization'] = 
  'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6Ik11cmlsbyBGcmFnb3NvIiwiZW1haWwiOiJtdWZyYWdvc29AZW1haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTYwNjUxNzg5MiwiZXhwIjoxNjA2NjA0MjkyfQ.1c9ifNZ4VmF8gJZFiEUCrTNFq3H-P9t-5R-6RpUkjA4'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')