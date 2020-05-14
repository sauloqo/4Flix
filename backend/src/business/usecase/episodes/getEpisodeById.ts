import { EpisodeDatabase } from "../../../data/episodeDatebase";
import { NotFoundError } from "../../error/NotFoundError";

export class GetEpisodeByIdUC {
   constructor(private db: EpisodeDatabase) { }

   public async execute(input: GetEpisodeByIdUCInput): Promise<GetEpisodeByIdUCOutput> {
      const episode = await this.db.getEpisodeById(input.id);

      if (!episode) {
         throw new NotFoundError("Episode not found!")
      };

      return {
         id: episode.getId(),
         title: episode.getTitle(),
         length: episode.getLength(),
         synopsis: episode.getSynopsis(),
         link: episode.getLink(),
         picture: episode.getPicture(),
         serieId: episode.getSerieId()
      }
   }
}

interface GetEpisodeByIdUCInput {
   id: string;
}

interface GetEpisodeByIdUCOutput {
   id: string;
   title: string;
   length: number;
   synopsis: string;
   link: string;
   picture: string;
   serieId: string;
}