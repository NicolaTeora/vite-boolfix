<script >
import { store } from './store';
import axios from 'axios';

//import componenti
import SearchBar from './components/SearchBar.vue';

export default{
  data(){
    return{
      titolo:'ciao da App',
      store,
      indexFilm: 0,
      NameFilms:[]
    };
  },
  
  components: { SearchBar },

  created(){
    //test recupero api
    axios.get(`${store.ApiUri}?query=${store.NameFilm}&api_key=${store.ApiKey}`).then((response)=>{
      this.NameFilms = response.data.results
      console.log(this.NameFilms)
    })
  }
}
</script>

<template>
  <!-- componente SearchBar -->
  <search-bar/>

  <!-- Titolo -->
  <span>Titolo:</span>
  <h1>{{ NameFilms[indexFilm].original_title }}</h1>
  
  <!-- Titolo originale-->
  <h3>{{ NameFilms[indexFilm].original_title }}</h3>

  <!-- Lingua -->
  <p>Lingua: <b>{{ NameFilms[indexFilm].original_language }}</b></p>

  <!-- Valutazione -->
  <p>Voto: <b>{{ NameFilms[indexFilm].vote_average }}</b></p>
  
</template>

<style lang="scss">
  @use './styles/general.scss' as*;
</style>
