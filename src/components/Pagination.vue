<template>
  <ul>
    <li>First</li>
    <li>Previous</li>
    <li>{{ page }}</li>
    <li>Next</li>
    <li>Last</li>
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
    jumpToFirst() {
      this.goToPage(1);
    },

    goToPage(page: number) {
      this.$emit("goToPage", page);
    },

    jumpToLast() {
      this.goToPage(this.maximum);
    },
  },
});
</script>
