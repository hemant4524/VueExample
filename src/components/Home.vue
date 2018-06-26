<template>
  <div class="hello">
    {{msg}}
    <input v-model="msg">

    <ul>
      <li  v-bind:key="product.id" v-for="product in products">
      {{ product.title }} - {{ product.price }}</li>
    </ul>
    <div v-if="jokes.length<=0?true:false">
        Loading data...
    </div>
    <div v-else>{{jokes}}</div>
  </div>
</template>

<script>
import shop from '@/api/shop'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  computed: mapState({
    products: state => state.products.all,
    jokes: state => state.joke.all
  }),
  created(){
        this.$store.dispatch('products/getAllProducts')
        this.$store.dispatch('joke/getAllJokes')

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
