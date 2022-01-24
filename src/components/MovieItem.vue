<template>
  <div>
    {{ movie.Title }}
    Release Year: {{ movie.Year }}
    <button @click="toggleFavourited">{{ isFavourited }}</button>
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
