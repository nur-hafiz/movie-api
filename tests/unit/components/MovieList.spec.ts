import { shallowMount } from "@vue/test-utils";
import Movie from "@/types/Movie";
import Favourites from "@/store/Favourites";
import MovieItem from "@/components/MovieItem.vue";
import MovieList from "@/components/MovieList.vue";
const favourites = new Favourites();
const movies = <Movie[]>[];

describe("MovieList.vue", () => {
  it("Shows 'No movies found' message if movies prop is empty", () => {
    const wrapper = shallowMount(MovieList, {
      props: {
        movies,
        favourites,
      },
    });

    expect(wrapper.text()).toMatch("No movies found");
  });

  it("Contains a list item for every movie in movies prop", () => {
    movies.push({ Title: "Hello0", imdbID: "223310", Year: 2020 });
    movies.push({ Title: "Hello1", imdbID: "223311", Year: 2021 });
    movies.push({ Title: "Hello2", imdbID: "223312", Year: 2022 });

    const wrapper = shallowMount(MovieList, {
      props: {
        movies,
        favourites,
      },
    });

    expect(wrapper.findAllComponents(MovieItem)).toHaveLength(movies.length);
  });
});
