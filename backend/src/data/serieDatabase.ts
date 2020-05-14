import { BaseDB } from "./baseDatabase"
import { Serie } from "../business/entities/serie";
import { SerieGateway } from "../business/gateways/serieGateway";

export class SerieDatabase extends BaseDB implements SerieGateway {
   private seriesTable = "FourFlix_series";

   public async createSerie(serie: Serie): Promise<void> {
      await this.connection.raw(`
         INSERT INTO ${this.seriesTable} (id, title, date, synopsis, link, picture)
         VALUES (
            '${serie.getId()}',
            '${serie.getTitle()}',
            '${serie.getDate()}',
            '${serie.getSynopsis()}',
            '${serie.getLink()}',
            '${serie.getPicture()}'
         );
      `)
   };

   public async getSerieById(id: string): Promise<Serie | undefined> {
      const result = await this.connection.raw(`
         SELECT * FROM ${this.seriesTable}
         WHERE id = '${id}';
      `)

      if(!result[0][0]) {
         return undefined
      };

      return new Serie (
         result[0][0].id,
         result[0][0].title,
         result[0][0].date,
         result[0][0].synopsis,
         result[0][0].link,
         result[0][0].picture
      )
   }
}