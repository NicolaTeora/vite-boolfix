<script >
import { store } from './store';
import axios from 'axios';

//import componenti
import MyComponent from './components/MyComponent.vue';

export default{
  data(){
    return{
      store,
      titolo:'ciao'
    };
  },
  
  components: { MyComponent },

}
</script>

<template>
  {{ titolo }} <br>
  {{ store.saluto }}
  <my-component/>  
</template>

<style lang="scss">
  @use './styles/general.scss' as*;
</style>
