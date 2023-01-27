import { createStore } from 'vuex'
import Home from './Home'
import Category from './Category'
import Login from './Login.js'

export default createStore({
  modules: {
    Home,
    Category,
    Login
  }
})
