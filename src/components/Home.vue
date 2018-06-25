<template>
  <div class="hello">
    {{msg}}
    <input v-model="msg">

    <ul>
      <li v-for="product in products">
      {{ product.title }} - {{ product.price }}</li>
    </ul>
    {{jokes}}
  </div>
</template>

<script>
import shop from '@/api/shop'
// import jocks from '@/api/jocks'
// import store from '@/store/index'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: mapState({
    products: state => state.products.all,
    jokes: state => state.joke.all
    // products(){
    //   return store.state.products
    // }
  }),
  created(){
        // shop.getProducts(products =>{
        //         store.commit('setProducts',products)
        //       }
        // )

        this.$store.dispatch('products/getAllProducts')
        this.$store.dispatch('joke/getAllJokes')

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
