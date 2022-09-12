<template>
  <div class="v-catalog-item">

    <v-modal v-if="isModalVisible" @closeWindow="closeWindow" @addAction="addToCArt">
      <img class="v-catalog-item__image" :src="require(`../assets/images/${product_data.image}`)" alt="img">
      <p class="v-catalog-item__name">{{ product_data.name }}</p>
      <p class="v-catalog-item__price">Price: {{ product_data.price }} Р.</p>
      <p class="v-catalog-item__price">{{ product_data.category }}</p>
    </v-modal>

    <img class="v-catalog-item__image" :src="require(`../assets/images/${product_data.image}`)" alt="img">
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">Price: {{ product_data.price }} Р.</p>

    <div class="v-btn__wrapper">
      <button class="v-catalog-item__show_info_btn btn" @click="showModal">Show info</button>
      <button class="v-catalog-item__add_to_cart_btn btn" @click="addToCArt">Add to cart</button>
    </div>
    
  </div>
</template>

<script>
import vModal from './UI/v-modal.vue';

export default {
  name: "v-catalog-item",
  components: { vModal },
  emits: [
    'addToCArt'
  ],
  data () {
    return {
      isModalVisible: false
    }
  },
  props:{
    product_data:{
      type: Object,
      default () {
        return {
      }
    } 
    },    
  },
  methods:{
    addToCArt() {
      this.$emit('addToCArt', this.product_data)
    },
    showModal () {
      this.isModalVisible = true
    },
    closeWindow () {
      this.isModalVisible = false
    }
  }
}
</script>

<style lang="scss">
 .v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding*2;
  margin-bottom: $margin*2;
  &__image{
    width: 100px;
  }  
 } 

</style>