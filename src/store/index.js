import { reactive } from "vue";
export const store = reactive({
  saluto: "ciao dallo store",

  //uri base per database API film
  ApiUri: "https://api.themoviedb.org/3/",

  //endpoint film
  EndPointFilm: "search/movie",
  //endpoint serie
  EndPointSerie: "search/tv",

  //nome del film da cercare
  TitleProduct: "",
  ApiKey: "50147f23c3955fd1ea8141a464594a2f",

  //array rislutati results
  NameFilms: [],
  NameSeries: [],
});
