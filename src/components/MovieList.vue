<template>
  <ul class="list" v-if="movies.length > 0">
    <li class="list__item" v-for="movie in movies" :key="movie.imdbID">
      <MovieItem :movie="movie" :favourites="favourites" />
    </li>
  </ul>

  <p v-else>No movies found</p>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Movie from "@/types/Movie";
import MovieItem from "@/components/MovieItem.vue";
import Favourites from "@/store/Favourites";

export default defineComponent({
  components: { MovieItem },

  props: {
    movies: {
      type: Array as PropType<Movie[]>,
    },

    favourites: {
      required: true,
      type: Object as () => Favourites,
    },
  },
});
</script>

<style scoped>
.list {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
}

.list__item {
  width: 45%;
  margin: calc(10% / 4);
}

@media only screen and (min-width: 992px) {
  .list__item {
    width: 30%;
    margin: calc(10% / 6);
  }
}

p {
  text-align: center;
}
</style>
