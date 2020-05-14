import { NotFoundError } from "../../error/NotFoundError";
import { SerieGateway } from "../../gateways/serieGateway";

export class GetSerieByIdUC {
   constructor(private db: SerieGateway) { }

   public async execute(input: GetSerieByIdUCInput): Promise<GetSerieByIdUCOutput> {
      const serie = await this.db.getSerieById(input.id);

      if (!serie) {
         throw new NotFoundError("Serie not found!")
      };

      return {
         id: serie.getId(),
         title: serie.getTitle(),
         date: serie.getDate(),
         synopsis: serie.getSynopsis(),
         link: serie.getLink(),
         picture: serie.getPicture()
      }
   }
}

interface GetSerieByIdUCInput {
   id: string;
}

interface GetSerieByIdUCOutput {
   id: string;
   title: string;
   date: Date
   synopsis: string;
   link: string;
   picture: string;
}