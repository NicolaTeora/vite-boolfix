<script >
import {store} from '../store'

export default{
  data(){
    return{
      store,
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
  <nav>
    <div class="container">
      <label for="search-title"> Titolo da cercare: </label>
      <input id="search-title" type="text" placeholder="Inserisci Film/Serie " v-model="store.TitleProduct">
      <button @click="$emit('foun_film_serie'), refresInput()">Cerca</button>  
    </div>
  </nav>

</template>
<style lang="scss" scoped>
  @use '../styles/general.scss' as*;
  
  nav{
    padding: 1rem 0;
    color: red;
    background-color: rgb(29, 29, 29);
    
    label{
      font-family:'Courier New', Courier, monospace;
      font-weight: bold;
    }

    #search-title{
      width: 50%;
      margin-right: 1rem;
      padding: 2px 5px;
      background-color: lightgray;
      border-style: none;
    }

    button{
      border-style: none;
      background-color: inherit;
      color: inherit;
    }
  }
</style>
