<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'cart', path: '/cart' }">
      <div class="v-catalog__link_to_cart"> CART: {{cart.length}}</div>
    </router-link>
    <h1> Catalog</h1>
    <div class="v-catalog__list">
      <v-catalog-item 
        v-for="product in products"
        :key="product.article"
        :product_data="product"
        @addToCArt="addToCArt"
      />
    </div>    
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import vCatalogItem from './v-catalog-item.vue';

export default {
 name: 'v-catalog',
 components: { vCatalogItem },
 data () {
  return {

  }
 },
 methods: {
  ...mapActions([
    'GET_PRODUCTS_FROM_API',
    'ADD_TO_CART'
  ]),
  addToCArt(data) {
    this.ADD_TO_CART(data)
  },
  routeToCart () {
    this.$router.push({ path: '/cart' })
  }
 },
 computed:{
  ...mapState([
    'products',
    'cart'
 ])  
 },
 mounted () {
  this.GET_PRODUCTS_FROM_API()
 } 
}
</script>

<style lang="scss">
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__link_to_cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding*2;
    border: solid 1px #aeaeae;
  }
}
</style>