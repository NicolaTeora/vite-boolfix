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
