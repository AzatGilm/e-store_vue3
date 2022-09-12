<template>
  <div class="v-modal" @click="closeModal">
    <div class="v-modal__wrapper" @click.stop>
      <div class="v-modal__content"        
      >
        <slot></slot>      
      </div>
      <div class="v-btn__wrapper">
        <button class="v-modal__close_btn btn" 
        @click="closeModal"
        >
          Close
        </button>
        <button 
          class="v-modal__add_to_cart_btn btn"
          @click="$emit ('addAction')"          
        >
          Add to cart
        </button>      
     </div>    
    </div>    
  </div>
</template>

<script>
export default {
  name: 'v-modal',
  props: {
    show: {
      type: String
    }
  },
  methods: {
    closeModal() {
      this.$emit ('closeWindow', false)
    }
  }
}
</script >

<style lang="scss">
  .v-modal {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &__wrapper {
      z-index: 1000;
      width: 20%;
      background: white;
      padding: 40px;
      border-radius: $radius*2;
    }    
  }
  .v-btn__wrapper {
      display: flex;
      justify-content: space-between;
    }
</style>