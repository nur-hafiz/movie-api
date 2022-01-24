import Movie from "@/types/Movie";

class Favourites {
  private list: Movie[];

  constructor() {
    this.list = [];
  }

  public getMovies(): Movie[] {
    return this.list;
  }

  public hasMovie(movie: Movie): boolean {
    return this.list.some((item) => item.imdbID === movie.imdbID);
  }

  public addMovie(movie: Movie): void {
    this.list.push(movie);
  }

  public removeMovie(movie: Movie): void {
    this.list = this.list.filter((item) => item.imdbID !== movie.imdbID);
  }
}

export default Favourites;
