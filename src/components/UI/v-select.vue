<template>
  
    <select class="v-select" @change="selectOption" >
      <option disabled value="">Выберите из списка</option>
      <option 
        v-for="option in options"
        :key="option.value"        
        :value="option.name"        
        >
        {{option.name}}
      </option>
    </select>
 
  
</template>

<script>

export default {
  name: 'v-select',
  props: { 
    options: {
      type: Array
    }  
  },
  data () {
    return {

    }
  },
  methods: {
    selectOption (event) {
      this.$emit('changeOpt', event.target)
    }
  }
}
</script>

<style>
 
</style>