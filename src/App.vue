<script >
import { store } from './store';
import axios from 'axios';

//import componenti
import MyComponent from './components/MyComponent.vue';

export default{
  data(){
    return{
      store,
      titolo:'ciao da App'
    };
  },
  
  components: { MyComponent },

  created(){
    //test recupero api
    axios.get('https://api.themoviedb.org/3/search/movie?query=John Wick&api_key=50147f23c3955fd1ea8141a464594a2f').then((response)=>{
      console.log(response.data.results)
    })
  }
}
</script>

<template>
  <h1>{{ titolo }}</h1>
  {{ store.saluto + ' nella tua App'}}
  <my-component/>  
</template>

<style lang="scss">
  @use './styles/general.scss' as*;
</style>
