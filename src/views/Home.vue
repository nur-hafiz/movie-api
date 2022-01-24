<template>
  <div>
    <input @input="getMovies(1)" v-model="query" type="text" />
    <button @click="showFavourites">Favourites</button>
    <MovieList :movies="list" :favourites="favourites" />
    <Pagination @goToPage="getMovies" :page="page" :maximum="lastPage" />
    {{ query }}
    {{ page }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MovieList from "@/components/MovieList.vue";
import Pagination from "@/components/Pagination.vue";
import Movie from "@/types/Movie";
import Favourites from "@/store/Favourites";

export default defineComponent({
  components: { MovieList, Pagination },
  setup() {
    let list = ref<Movie[]>([]);
    let query = ref<string>("");
    let page = ref<number>(1);
    let lastPage = ref<number>(1);
    let favourites = ref(new Favourites());

    return {
      list,
      query,
      page,
      lastPage,
      favourites,
    };
  },

  methods: {
    showFavourites() {
      this.list = this.favourites.getMovies();
    },

    getMovies(page: number) {
      this.showingFavourites = false;
      this.page = page;

      fetch(
        `https://jsonmock.hackerrank.com/api/movies/search/?Title=${this.query}&page=${page}`
      )
        .then((res) => {
          res.json().then((data) => {
            this.list = data.data as Movie[];
            this.lastPage = data.total_pages;
          });
        })
        .catch((err) => {
          console.log("Fetch Error :-S", err);
        });
    },
  },

  mounted() {
    this.getMovies(1);
  },
});
</script>
