<template>
  <div></div>
</template>

<script lang="ts">
import Vue from "vue";
import { defineComponent, reactive, ref, toRefs } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({});

    return {
      ...toRefs(state),
    };
  },
});
</script>
