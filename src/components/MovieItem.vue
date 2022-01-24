<template>
  <div class="movie">
    <div class="movie__head">
      <span>{{ movie.imdbID }}</span>
      <a
        href="#"
        @click.prevent="toggleFavourited"
        class="star"
        :class="{ 'star--favourited': isFavourited }"
      ></a>
    </div>

    <h2 class="movie__title">
      {{ movie.Title }} <span>({{ movie.Year }})</span>
    </h2>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Movie from "@/types/Movie";
import Favourites from "@/store/Favourites";

export default defineComponent({
  props: {
    movie: {
      required: true,
      type: Object as () => Movie,
    },

    favourites: {
      required: true,
      type: Object as () => Favourites,
    },
  },

  setup(props) {
    const isFavourited = computed<boolean>(() =>
      props.favourites.hasMovie(props.movie)
    );

    return {
      isFavourited,
    };
  },

  methods: {
    toggleFavourited() {
      if (this.isFavourited) {
        this.favourites.removeMovie(this.movie);
      } else {
        this.favourites.addMovie(this.movie);
      }
    },
  },
});
</script>

<style scoped>
.movie {
  background: #ff8b94;
  border-radius: 5px;
  margin-bottom: 2em;
  padding: 1.5em 1.7em;
}

.movie__head {
  display: flex;
  justify-content: center;
  align-items: center;
}

.movie__title {
  font-size: 1.3em;
}

.star {
  display: block;
  height: 20px;
  width: 20px;
  margin: 0.3em;
  color: transparent;
  background: transparent url("~@/assets/star-gray.png") no-repeat center;
  background-size: contain;
  padding: 0;
  transition: transform 330ms ease-in-out;
}

.star:hover {
  transform: scale(120%) rotate(145deg);
}

.star--favourited {
  background: transparent url("~@/assets/star-yellow.png") no-repeat center;
  background-size: contain;
}
</style>
