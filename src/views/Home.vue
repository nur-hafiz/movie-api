<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Movie from "@/types/Movie";

export default defineComponent({
  setup() {
    let list = ref<Movie[]>([]);

    return {
      list,
    };
  },

  methods: {
    getMovies(query: string, page: number) {
      fetch(
        `https://jsonmock.hackerrank.com/api/movies/search/?Title=${query}&page=${page}`
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
    this.getMovies("", 1);
  },
});
</script>
