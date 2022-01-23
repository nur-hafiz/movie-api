<template>
  <div>
    {{ movie.Title }}
    Release Year: {{ movie.Year }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Movie from "@/types/Movie";

export default defineComponent({
  props: {
    movie: {
      required: true,
      type: Object as () => Movie,
    },
  },
});
</script>
