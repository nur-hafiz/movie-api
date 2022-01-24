<template>
  <div>
    <input @input="getMovies(1)" v-model="query" type="text" />
    <MovieList :movies="list" />
    {{ query }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MovieList from "@/components/MovieList.vue";
import Movie from "@/types/Movie";

export default defineComponent({
  components: { MovieList },
  setup() {
    let list = ref<Movie[]>([]);
    let query = ref<string>("");

    return {
      list,
      query,
    };
  },

  methods: {
    getMovies(page: number) {
      fetch(
        `https://jsonmock.hackerrank.com/api/movies/search/?Title=${this.query}&page=${page}`
      )
        .then((res) => {
          res.json().then((data) => {
            this.list = data.data as Movie[];
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
