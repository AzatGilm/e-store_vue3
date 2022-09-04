<template>
  <div class="v-cart">
    <router-link :to="{ name: 'catalog', path: '/' }">
      <div class="v-catalog__link_to_cart"> Back to catalog </div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!cart_data.length"> There are no products in the cart...</p>
    <v-cart-item 
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCArt(index)"
      @decrement="decrement(index)"
      @increment="increment(index)"
    />
    <div class="v-cart__total">
      <p class="total_name"> Total: {{cartTotalCost}} P.</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import vCartItem from './v-cart-item.vue'

export default {
  components: { vCartItem },
  name: 'v-cart',
  props:{
    // // cart_data:{
    // //   type: Array,
    // //   default () {
    // //     return []
    // //   }
    // }
  },
  methods:{
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM'
    ]),
    deleteFromCArt (index) {
      this.DELETE_FROM_CART(index)
    },
    decrement (index) {
      this.DECREMENT_CART_ITEM(index)
    },
    increment (index) {
      this.INCREMENT_CART_ITEM(index)
    }
  },
  computed:{
    ...mapState({
      cart_data: 'cart'
    }),
    cartTotalCost () {
      let result = [];

      if(this.cart_data.length){
        for (let item of this.cart_data) {
        result.push(item.price * item.quantity)
      }
        result = result.reduce((acc, el) => {
          return acc + el
        })
      }else {
        return 0
      }
      
      return result;
    }
  }
}
</script>

<style lang="scss">
  .v-cart {
    margin-bottom: 100px;
      &__total {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        padding: $padding*3;
        display: flex;
        justify-content: center;
        background: $purple-bg;
        color: #ffffff;
        font-size: 20px;
      }
      .total_name {
        margin-right: $margin*2;
      }
  }
</style>