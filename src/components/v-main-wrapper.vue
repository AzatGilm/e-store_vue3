<template>
  <div class="v-main-wrapper"> 
    
      <router-view ></router-view>
    
  </div>
</template>

<script>

export default {
  name: 'v-main-wrapper',
  components: {},
  data () {
    return {     
    }
  },
  methods:{    
  },
  computed:{        
  }
}
</script>

<style lang="scss">
.v-main-wrapper{  
  max-width: 900px;
  margin: 0 auto;
}
</style>