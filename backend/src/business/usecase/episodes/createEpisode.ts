import { EpisodeDatabase } from "../../../data/episodeDatebase";
import { v4 } from "uuid";
import { Episode } from "../../entities/episodes";

export class CreateEpisodeUC {
   constructor(private db: EpisodeDatabase) { }

   public async execute(input: CreateEpisodeUCInput): Promise<CreateEpisodeUCOutput> {
      const id = v4();

      const episode = new Episode(
         id,
         input.title,
         input.length,
         input.synopsis,
         input.link,
         input.picture,
         input.serieId
      )

      await this.db.createEpisode(episode);

      return {
         message: "Episode created successfully!"
      }
   }
}

interface CreateEpisodeUCInput {
   title: string,
   length: number,
   synopsis: string,
   link: string,
   picture: string,
   serieId: string
}

interface CreateEpisodeUCOutput {
   message: string
}