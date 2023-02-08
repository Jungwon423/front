import { createStore } from 'vuex'
import Home from './Home'
import Category from './Category'
import Login from './Login.js'
import Product from './Product'
import Search from './Search'

export default createStore({
  modules: {
    Home,
    Category,
    Login,
    Product,
    Search,
  }
})
