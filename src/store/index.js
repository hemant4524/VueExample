// import Vuex from 'vuex'
// import Vue from 'vue'

// Vue.use(Vuex)

// export default new Vuex.Store({
//     state:{

//         products:[]
//     },

//     getters:{
//         productsCount(){

//         }
//     },

//     actions:{

//         fetchProducts(){

//         }
//     },

//     mutations:{
//         setProducts(state,products){
//             state.products = products
//         }
//     }



// })
import Vue from 'vue'
import Vuex from 'vuex'
import joke from './modules/joke'
import products from './modules/products'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    joke,
    products
  }
})
