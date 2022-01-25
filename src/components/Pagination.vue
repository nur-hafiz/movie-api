<template>
  <div class="pagination-wrapper">
    <ul class="pagination">
      <li
        tabindex="0"
        class="pagination__button pagination__button--first"
        :class="[page == 1 ? disabledClass : enabledClass]"
        @click="goToPage(1)"
      ></li>
      <li
        tabindex="0"
        class="pagination__button pagination__button--previous"
        :class="[page == 1 ? disabledClass : enabledClass]"
        @click="goToPage(page - 1)"
      ></li>
      <li class="pagination__page">{{ page }}</li>
      <li
        tabindex="0"
        class="pagination__button pagination__button--next"
        :class="[page == maximum ? disabledClass : enabledClass]"
        @click="goToPage(page + 1)"
      ></li>
      <li
        tabindex="0"
        class="pagination__button pagination__button--last"
        :class="[page == maximum ? disabledClass : enabledClass]"
        @click="goToPage(maximum)"
      ></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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

  setup() {
    return {
      enabledClass: "pagination__button--enabled",
      disabledClass: "pagination__button--disabled",
    };
  },

  methods: {
    goToPage(page: number) {
      if (page < 1 || page > this.maximum) return;
      this.$emit("goToPage", page);
    },
  },
});
</script>

<style scoped>
.pagination-wrapper {
  display: flex;
  justify-content: center;
}

.pagination {
  display: flex;
  justify-content: center;
  list-style: none;
  border-radius: 6px;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.pagination__page {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination__button {
  width: 25px;
  height: 35px;
}

.pagination__button--first,
.pagination__button--last {
  background: #ff8b94 url("~@/assets/double-arrow.png") no-repeat center;
  background-size: 90%;
}

.pagination__button--previous,
.pagination__button--next {
  background: #ff8b94 url("~@/assets/arrow.png") no-repeat center;
  background-size: 90%;
}

.pagination__button--next,
.pagination__button--last {
  transform: rotate(180deg);
}

.pagination__button.pagination__button--enabled:hover {
  cursor: pointer;
  background-color: #ff5b64;
}

.pagination__button.pagination__button--disabled {
  opacity: 0;
  cursor: default;
}

.pagination__page {
  padding: 2px 10px;
}
</style>
