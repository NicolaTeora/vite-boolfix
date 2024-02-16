<script >
import { store } from './store';
import axios from 'axios';

//import componenti
import SearchBar from './components/SearchBar.vue';

export default{
  data(){
    return{
      store,
      NameFilms:[]
    };
  },
  
  components: { SearchBar },

  
  methods:{
    // TODO: agganciare il metodo con l'emit del componente search
    searchFilm(){
      axios.get(`${store.ApiUri}?query=${store.NameFilm}&api_key=${store.ApiKey}`).then((response)=>{
        this.NameFilms = response.data.results
        console.log(this.NameFilms)
      })    
    }   
    
  } 

}
</script>

<template>
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
