import { shallowMount } from "@vue/test-utils";
import Movie from "@/types/Movie";
import MovieItem from "@/components/MovieItem.vue";
import Favourites from "@/store/Favourites";

const movie: Movie = {
    Title: 'Hello World',
    imdbID: '221100',
    Year: 2022
}

const favourites = new Favourites()

describe("MovieItem.vue", () => {
    let wrapper: any;
  
    beforeEach(() => {
        wrapper = shallowMount(MovieItem, {
            props: {
                movie,
                favourites
            },
        });
    });

    it("Shows id of movie", () => {
        expect(wrapper.find('.movie__head span').text()).toMatch(movie.imdbID);
    });

  it("Shows title of movie", () => {
    expect(wrapper.find('h2').text()).toMatch(movie.Title);
  });

  it("Shows year of movie", () => {
    expect(wrapper.find('h2 span').text()).toMatch(String(movie.Year));
  });

  it("Should show dark star if not favourited", () => {
    expect(wrapper.find('a').classes()).not.toContain(
        "star--favourited"
      );
  });

  it("Should show yellow star if favourited", async () => {
    await wrapper.find('a').trigger('click');
    expect(wrapper.find('a').classes()).toContain(
        "star--favourited"
      );
  });
});
