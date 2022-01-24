<template>
  <ul>
    {{
      maximum
    }}
    <li @click="goToPage(1)">First</li>
    <li @click="goToPage(page - 1)">Previous</li>
    <li>{{ page }}</li>
    <li @click="goToPage(page + 1)">Next</li>
    <li @click="goToPage(maximum)">Last</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    page: {
      required: true,
      type: Number,
    },
    maximum: {
      required: true,
      type: Number,
    },
  },

  methods: {
    goToPage(page: number) {
      if (page < 1 || page > this.maximum) return;
      this.$emit("goToPage", page);
    },
  },
});
</script>
