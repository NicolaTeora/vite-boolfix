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
    searcSeries(){
      axios.get(`${store.ApiUri}${store.EndPointSerie}?query=${store.TitleProduct}&api_key=${store.ApiKey}`).then((response)=>{
        this.NameFilms = response.data.results
      })
    }

    
  } 

}
</script>

<template>
  <h1>BOOLFLIX</h1>
  <!-- componente SearchBar -->
  <search-bar @foun_film="searchFilm"/>

  <ul v-for="film of NameFilms">
    <!-- Titolo -->
    <li>Nome: {{ film.original_title }}</li>
    <li>Titolo: <b>{{ film.original_title }}</b></li>
    <!-- Lingua -->
    <li>Lingua: {{ film.original_language }}</li>
    <!-- Valutazione -->
    <li>Voto: {{ film.vote_average }}</li>
  </ul>

  
</template>

<style lang="scss">
  @use './styles/general.scss' as*;
</style>
