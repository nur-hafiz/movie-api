<template>
  <div>
    <h1>Movie Api</h1>
    <div class="controls">
      <input
        class="searchbar"
        v-show="!showingFavourites"
        @input="getMovies(1)"
        v-model="query"
        type="text"
      />
      <button
        class="list-toggle"
        :class="[showingFavourites ? 'magnifying-glass' : 'star']"
        @click="toggleShowFavourites"
      ></button>
    </div>
    <MovieList :movies="list" :favourites="favourites" />
    <Pagination
      v-show="!showingFavourites"
      @goToPage="getMovies"
      :page="page"
      :maximum="lastPage"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MovieList from "@/components/MovieList.vue";
import Pagination from "@/components/Pagination.vue";
import Movie from "@/types/Movie";
import Favourites from "@/store/Favourites";

export default defineComponent({
  components: { MovieList, Pagination },
  setup() {
    let list = ref<Movie[]>([]);
    let query = ref<string>("");
    let page = ref<number>(1);
    let lastPage = ref<number>(1);
    let favourites = ref(new Favourites());
    let showingFavourites = ref<boolean>(false);

    return {
      list,
      query,
      page,
      lastPage,
      favourites,
      showingFavourites,
    };
  },

  methods: {
    toggleShowFavourites() {
      this.showingFavourites = !this.showingFavourites;
      if (this.showingFavourites) {
        this.list = this.favourites.getMovies();
      } else {
        this.getMovies(this.page);
      }
    },

    getMovies(page: number) {
      this.page = page;

      fetch(
        `https://jsonmock.hackerrank.com/api/movies/search/?Title=${this.query}&page=${page}`
      )
        .then((res) => {
          res.json().then((data) => {
            this.list = data.data as Movie[];
            this.lastPage = data.total_pages;
          });
        })
        .catch((err) => {
          console.log("Fetch Error :-S", err);
        });
    },
  },

  mounted() {
    this.getMovies(1);
  },
});
</script>

<style scoped>
.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 20px;
}

.searchbar {
  border-radius: 4px;
  height: 20px;
  padding: 5px;
}

.list-toggle {
  display: block;
  height: 30px;
  width: 30px;
  outline: none;
  border: 2px solid black;
  background-size: contain;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
}

.list-toggle:hover {
  cursor: pointer;
  background-color: #ff5b64;
}

.magnifying-glass {
  background-image: url("~@/assets/magnify.png");
}

.star {
  background-image: url("~@/assets/star-gray.png");
}

.star:hover {
  background-image: url("~@/assets/star-yellow.png");
}
</style>
