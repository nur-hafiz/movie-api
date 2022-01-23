<template>
  <div>
    <ul>
      <li v-for="movie in movies" :key="movie.imdbID">
        <MovieItem :movie="movie" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Movie from "@/types/Movie";
import MovieItem from "@/components/MovieItem.vue";

export default defineComponent({
  components: { MovieItem },

  props: {
    movies: {
      required: true,
      type: Array as PropType<Movie[]>,
    },
  },
});
</script>
