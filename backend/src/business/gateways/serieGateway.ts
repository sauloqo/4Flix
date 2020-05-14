import { Serie } from "../entities/serie";

export interface SerieGateway {
   createSerie(serie: Serie): Promise<void>;
   getSerieById(id: string): Promise<Serie | undefined>
}