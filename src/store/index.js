import { reactive } from "vue";
export const store = reactive({
  saluto: "ciao dallo store",

  ApiUri: "https://api.themoviedb.org/3/search/movie", //uri base per database API film
  NameFilm: "Se scappi ti sposo", //nome del film da cercare
  ApiKey: "50147f23c3955fd1ea8141a464594a2f",
});
