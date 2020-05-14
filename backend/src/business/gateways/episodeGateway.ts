import { Episode } from "../entities/episodes";

export interface EpisodeGateway {
   createEpisode(episode: Episode): Promise<void>;
   getEpisodeById(id: string): Promise<Episode | undefined>;
}