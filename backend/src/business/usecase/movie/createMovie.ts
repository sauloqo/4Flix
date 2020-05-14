import { MovieDatabase } from "../../../data/movieDatebase";
import { v4 } from "uuid";
import { Movie } from "../../entities/movie";

export class CreateMovieUC {
   constructor(private db: MovieDatabase) { }

   public async execute(input: CreateMovieUCInput): Promise<CreateMovieUCOutput> {
      const id = v4()
      const movie = new Movie(
         id,
         input.title,
         input.date,
         input.length,
         input.synopsis,
         input.link,
         input.picture
      )

      await this.db.createMovie(movie)

      return {
         message: "Movie created successfully!"
      }
   }   
}

interface CreateMovieUCInput {
   title: string;
   date: Date;
   length: number;
   synopsis: string;
   link: string;
   picture: string;
}

interface CreateMovieUCOutput {
   message: string;
}