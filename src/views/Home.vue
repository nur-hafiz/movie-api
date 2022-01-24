<template>
  <div>
    <input @input="getMovies(1)" v-model="query" type="text" />
    <MovieList :movies="list" />
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

export default defineComponent({
  components: { MovieList, Pagination },
  setup() {
    let list = ref<Movie[]>([]);
    let query = ref<string>("");
    let page = ref<number>(1);
    let lastPage = ref<number>(1);

    return {
      list,
      query,
      page,
      lastPage,
    };
  },

  methods: {
    getMovies(page: number) {
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
