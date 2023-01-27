import { createStore } from 'vuex'
import ProductStore from './ProductStore'
import userStore from './userStore.js'

export default createStore({
  modules: {
    ProductStore,
    userStore
  }
})
