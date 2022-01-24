<template>
    <ul>
        <li>First</li>
        <li>Previous</li>
        <li>Current</li>
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
          type: Number
      }
  },
  setup() {
  },

  methods: {
    jumpToFirst() {
    },

    goToPage(page: number) {
    },

    jumpToLast() {
    }
  },

  mounted() {
  },
});
</script>
