import { Request, Response } from "express";
import { CreateEpisodeUC } from "../../../business/usecase/episodes/createEpisode";
import { EpisodeDatabase } from "../../../data/episodeDatebase";

export const createEpisodeEndpoint = async (req: Request, res: Response) => {
   try {
      const createEpisodeUC = new CreateEpisodeUC(new EpisodeDatabase());
      const result = await createEpisodeUC.execute({
         title: req.body.title,
         length: req.body.length,
         synopsis: req.body.synopsis,
         link: req.body.link,
         picture: req.body.picture,
         serieId: req.body.serieId
      })

      res.status(200).send(result);
   } catch (err) {
      res.status(err.errorCode || 400).send({
         message: err.message,
         ...err
      })
   }
}