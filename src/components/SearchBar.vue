<script >
import {store} from '../store'

export default{
  data(){
    return{
      store,
      TitleFilm:''
    }
  },

  methods:{
    searchFilms(){
      store.NameFilm = this.TitleFilm
      this.TitleFilm = ''
    }
  }
  
}
</script>

<template>
  <label for="search-title">Titolo da cercare </label>
  <input id="search-title" type="text" v-model="TitleFilm">
  <button @click="searchFilms()">Cerca</button>  
</template>
<style lang="scss" scoped>
  @use '../styles/general.scss' as*;
</style>
