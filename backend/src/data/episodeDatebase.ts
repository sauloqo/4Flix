import { BaseDB } from "./baseDatabase";
import { Episode } from "../business/entities/episodes";
import { EpisodeGateway } from "../business/gateways/episodeGateway";

export class EpisodeDatabase extends BaseDB implements EpisodeGateway {
   private episodeTable = "FourFlix_episodes";

   public async createEpisode(episode: Episode): Promise<void> {
      await this.connection.raw(`
         INSERT INTO ${this.episodeTable} (id, title, length, synopsis, link, picture, serieId)
         VALUE (
            '${episode.getId()}',
            '${episode.getTitle()}',
            '${episode.getLength()}',
            '${episode.getSynopsis()}',
            '${episode.getLink()}',
            '${episode.getPicture()}',
            '${episode.getSerieId()}'
         );
      `)
   };

   public async getEpisodeById(id: string): Promise<Episode | undefined> {
      const result = await this.connection.raw(`
         SELECT * FROM ${this.episodeTable}
         WHERE id = '${id}';
      `)

      if (!result[0][0]) {
         return undefined
      };

      return new Episode(
         result[0][0].id,
         result[0][0].title,
         result[0][0].length,
         result[0][0].synopsis,
         result[0][0].link,
         result[0][0].picture,
         result[0][0].serieId
      )
   };
}