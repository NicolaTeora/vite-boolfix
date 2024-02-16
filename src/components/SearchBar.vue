<script >
import {store} from '../store'

export default{
  data(){
    return{
      store,
      //TitleFilm:''
    }
  },

  emits:['foun_film_serie'],

  methods:{
    refresInput(){
      store.TitleProduct = ''
    }
  }
  
}
</script>

<template>
  <h3>Film</h3>
  <label for="search-title">Titolo film da cercare </label>
  <input id="search-title" type="text" v-model="store.TitleProduct">
  <button @click="$emit('foun_film_serie'), refresInput()">Cerca</button>  

  <!-- <h3>Serie Tv</h3>
  <label for="search-title">Titolo serie da cercare </label>
  <input id="search-title" type="text" v-model="TitleFilm">
  <button @click="searchSeries()">Cerca</button> -->
</template>
<style lang="scss" scoped>
  @use '../styles/general.scss' as*;
</style>
