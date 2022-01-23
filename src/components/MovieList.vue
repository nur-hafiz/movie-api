<template>
  <div>
    <ul>
      <li v-for="movie in movies" :key="movie.imdbID">
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Movie from "@/types/Movie";

export default defineComponent({

  props: {
    movies: {
      required: true,
      type: Array as PropType<Movie[]>,
    },
  },
});
</script>
