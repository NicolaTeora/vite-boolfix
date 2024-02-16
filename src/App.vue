<script >
import { store } from './store';
import axios from 'axios';

//import componenti
import SearchBar from './components/SearchBar.vue';

export default{
  data(){
    return{
      store,
      NameFilms:[],
      NameSeries:[],
    };
  },
  
  components: { SearchBar },

  
  methods:{
    // metodo ricerca film
    searchFilm(){
      axios.get(`${store.ApiUri}${store.EndPointFilm}?query=${store.TitleProduct}&api_key=${store.ApiKey}`).then((response)=>{
        this.NameFilms = response.data.results
      })    
    },   
    
    // metodo ricerca serie
    searchSerie(){
      axios.get(`${store.ApiUri}${store.EndPointSerie}?query=${store.TitleProduct}&api_key=${store.ApiKey}`).then((response)=>{
        this.NameSeries = response.data.results
      })
    },

    
    searchTotal(){
      this.searchFilm()
      this.searchSerie()
    }
    
  } 

}
</script>

<template>
  <h1>BOOLFLIX</h1>
  <!-- componente SearchBar -->
  <search-bar @foun_film_serie="searchTotal"/>

  <ul v-for="film of NameFilms">
    <!-- Titolo -->
    <li>Nome: {{ film.original_title }}</li>
    <li>Titolo: <b>{{ film.original_title }}</b></li>
    <!-- Lingua -->
    <li>Lingua: {{ film.original_language }}</li>
    <!-- Valutazione -->
    <li>Voto: {{ film.vote_average }}</li>
  </ul>

  <ul v-for="serie of NameSeries">
    <!-- Titolo -->
    <li>Nome: {{ serie.name }}</li>
    <li>Titolo: <b>{{ serie.original_name }}</b></li>
    <!-- Lingua -->
    <li>Lingua: {{ serie.original_language }}</li>
    <!-- Valutazione -->
    <li>Voto: {{ serie.vote_average }}</li>
  </ul>

  
</template>

<style lang="scss">
  @use './styles/general.scss' as*;
</style>
