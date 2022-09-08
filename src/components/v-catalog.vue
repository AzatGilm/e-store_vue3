<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'cart', path: '/cart' }">
      <div class="v-catalog__link_to_cart"> CART: {{cart.length}}</div>
    </router-link>
    <h1> Catalog</h1>

    <div class="filter">
      <v-select
        :options="categories"      
        @update:model-value="sortByCategory"
      />
      <v-range-slider @setPrice="setRangeSlider"/>
    </div>
   
    <div class="v-catalog__list">
      <v-catalog-item 
        v-for="product in filteredProducts"        
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
import vSelect from './UI/v-select.vue'
import VRangeSlider from './UI/v-range-slider.vue';

export default {
 name: 'v-catalog',
 components: { vCatalogItem, vSelect, VRangeSlider },
 data () {
  return {
    categories: [
      { name: "Все",
        value: "All"
      },
      { name: "Мужские",
        value: "м"
      },
      { name: "Женские",
        value: "ж"
      }
    ],
    selected: '',    
    sortedProducts: [],
    minCost: 0,
    maxCost: 0
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
  },
  sortByCategory(option) {    
    this.sortedProducts = [...this.products]

    this.sortedProducts = this.sortedProducts.filter((item) => {
      return item.price >= this.minCost && item.price <= this.maxCost
    })

    if (option) {
      this.sortedProducts = this.sortedProducts.filter((e) => {
      return e.category === option.value
    })
    this.selected = option.value 
    console.log(this.selected);
    }
  },
  setRangeSlider (minPrice, maxPrice) {
    this.minCost = minPrice
    this.maxCost = maxPrice
    if (this.minCost > this.maxCost) {
      let tmp = this.minCost
      this.minCost = this.maxCost
      this.maxCost = tmp
    }
    this.sortByCategory()
  }
 },
 computed:{
  ...mapState([
    'products',
    'cart'
 ]),
 filteredProducts () {
  return this.sortedProducts.length?this.sortedProducts:this.products
 }  
 },
 mounted () {
  this.GET_PRODUCTS_FROM_API()
  .then(() => {
    this.sortByCategory()
  })
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
  .filter {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
}
</style>