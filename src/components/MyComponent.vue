<script >
import {store} from '../store'

export default{
  data(){
    return{
      store,
    }
  },

}
</script>

<template>
  <h2>MyComponent</h2>
  {{ store.saluto + ' nel componente'}}
</template>

<style lang="scss" scoped>
  @use '../styles/general.scss'
</style>
