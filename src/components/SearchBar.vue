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
  <label for="search-title">Titolo da cercare </label>
  <input id="search-title" type="text" >
</template>

<style lang="scss" scoped>
  @use '../styles/general.scss' as*;
</style>
