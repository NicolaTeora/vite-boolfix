<script >
import { store } from './store';
import axios from 'axios';

//import componenti
import SearchBar from './components/SearchBar.vue';

export default{
  data(){
    return{
      store,
      LinkPosterTitle: '',
    };
  },

  
  components: { SearchBar },

  
  methods:{
    // metodo ricerca film
    searchFilm(){
      axios.get(`${store.ApiUri}${store.EndPointFilm}?query=${store.TitleProduct}&api_key=${store.ApiKey}`).then((response)=>{
        store.NameFilms = response.data.results
        console.log(store.NameFilms)
      })    
    },   
    
    // metodo ricerca serie
    searchSerie(){
      axios.get(`${store.ApiUri}${store.EndPointSerie}?query=${store.TitleProduct}&api_key=${store.ApiKey}`).then((response)=>{
        store.NameSeries = response.data.results
      })
    },

    // metodo ricerca film e serie
    searchTotal(){
      this.searchFilm()
      this.searchSerie()
    },

    //metodo visualizzazione bandiere
    // TODO: chiedere al tutor perchè non funziona
    flagsApi(language){
      if (language == 'en') {language = 'gb'} else { return language }
    },
    
    //convertire il voto in intero
    voteTitle(vote){
      return parseInt(vote)
    },

    //metodo stampo della copertina
    pathPosterTitle(poster){
      return this.LinkPosterTitle = store.urlImg + poster
    }
    
  } 

}
</script>

<template>
  <h1>BOOLFLIX</h1>
  <!-- componente SearchBar -->
  <search-bar @foun_film_serie="searchTotal"/>

  <ul v-for="film of store.NameFilms">
    <!-- Titolo -->
    <li>Nome: {{ film.original_title }}</li>
    <li>Titolo: <b>{{ film.original_title }}</b></li>
    <!-- Valutazione -->
    <li>Voto: {{ voteTitle(film.vote_average) }}</li>
    <!-- Lingua -->
    <li>Lingua: <img :src="'https://flagcdn.com/32x24/'+flagsApi(film.original_language)+'.png'" :alt="film.original_language"></li>
    <!-- Poster del film -->
    <li><img :src="pathPosterTitle(film.poster_path)" alt=""></li>
  </ul>

  <ul v-for="serie of store.NameSeries">
    <!-- Titolo -->
    <li>Nome: {{ serie.name }}</li>
    <li>Titolo: <b>{{ serie.original_name }}</b></li>
    <!-- Valutazione -->
    <li>Voto: {{ voteTitle(serie.vote_average) }}</li>
    <!-- Lingua -->
    <li>Lingua: <img :src="'https://flagcdn.com/32x24/'+flagsApi(serie.original_language)+'.png'" :alt="serie.original_language"></li>
  </ul>

  
</template>

<style lang="scss">
  @use './styles/general.scss' as*;
</style>
