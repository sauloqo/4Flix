import { SerieDatabase } from "../../../data/serieDatabase";
import { v4 } from "uuid";
import { Serie } from "../../entities/serie";

export class CreateSerieUC {
   constructor(private db: SerieDatabase) { }

   public async execute(input: CreateSerieUCInput): Promise<CreateSerieUCOutput> {
      const id = v4();

      const serie = new Serie(
         id,
         input.title,
         input.date,
         input.synopsis,
         input.link,
         input.picture
      )

      await this.db.createSerie(serie)

      return {
         message: "Serie created successfully!"
      }
   }
}

interface CreateSerieUCInput {
   title: string;
   date: Date;
   synopsis: string,
   link: string,
   picture: string,
}

interface CreateSerieUCOutput {
   message: string;
}