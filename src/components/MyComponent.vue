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
  <h1>Hello!</h1>
  {{ store.saluto }}
</template>

<style lang="scss" scoped>
  @use '../styles/general.scss'
</style>
