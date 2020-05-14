import { BaseDB } from "./baseDatabase";
import { Movie } from "../business/entities/movie";
import { MovieGateway } from "../business/gateways/movieGateway";

export class MovieDatabase extends BaseDB implements MovieGateway {
   private movieTable = "FourFlix_movies";

   public async createMovie(movie: Movie): Promise<void> {
      await this.connection.raw(`
         INSERT INTO ${this.movieTable} (id, title, date, length, synopsis, link, picture)
         VALUES (
            '${movie.getId()}',
            '${movie.getTitle()}',
            '${movie.getDate()}',
            '${movie.getLength()}',
            '${movie.getSynopsis()}',
            '${movie.getLink()}',
            '${movie.getPicture()}'
         );
      `)
   };

   public async getMovieById(id: string): Promise<Movie | undefined> {
      const result = await this.connection.raw(`
         SELECT * FROM ${this.movieTable}
         WHERE id = '${id}';
      `);

      if (!result[0][0]) {
         return undefined
      };

      return new Movie(
         result[0][0].id,
         result[0][0].title,
         result[0][0].date,
         result[0][0].length,
         result[0][0].synopsis,
         result[0][0].link,
         result[0][0].picture
      )
   };
}