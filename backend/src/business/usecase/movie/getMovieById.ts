import { MovieDatabase } from "../../../data/movieDatebase";
import { NotFoundError } from "../../error/NotFoundError";

export class GetMovieByIdUC {
   constructor(private db: MovieDatabase) { }

   public async execute(input: GetMovieByIdUCInput): Promise<GetMovieByIdUCOutput> {
      const movie = await this.db.getMovieById(input.id);

      if (!movie) {
         throw new NotFoundError("Movie not found!")
      }

      return {
         id: movie.getId(),
         title: movie.getTitle(),
         date: movie.getDate(),
         length: movie.getLength(),
         synopsis: movie.getSynopsis(),
         link: movie.getLink(),
         picture: movie.getPicture()
      }
   }
}

interface GetMovieByIdUCInput {
   id: string;
}

interface GetMovieByIdUCOutput {
   id: string;
   title: string;
   date: Date;
   length: number;
   synopsis: string;
   link: string;
   picture: string;
}