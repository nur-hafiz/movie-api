import Favourites from "@/store/Favourites";

const favourites = new Favourites();
const movie1 = { Title: "Hello0", imdbID: "223310", Year: 2020 };

describe("Favourites", () => {
  it("Stores a movie when favourited", () => {
    favourites.addMovie(movie1);
    const list = favourites.getMovies();
    expect(list.some((movie) => movie.imdbID === movie1.imdbID)).toBe(true);
  });

  it("Removes a movie from list when unfavourited", () => {
    favourites.removeMovie(movie1);
    const list = favourites.getMovies();
    expect(list.some((movie) => movie.imdbID === movie1.imdbID)).toBe(false);
  });
});
