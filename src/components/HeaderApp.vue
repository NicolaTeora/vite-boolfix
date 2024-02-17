<script>
import {store} from '../store';
export default{
  data(){
    return{
      store,
      TitleApp: 'Boolflix'
    }
  },
}  
</script>

<template>
  <header>
    <div class="container header">
      <h1>{{ TitleApp.toUpperCase() }}</h1>
    </div>
  </header>
  </template>

<style lang="scss" scoped>
  @use '../styles/general.scss' as*;
  header{
    padding: 1rem 0;
    background-color: black;
  }
  
  h1{
    color: red;
    }
</style>