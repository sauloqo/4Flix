import { Request, Response } from "express";
import { GetSerieByIdUC } from "../../../business/usecase/series/getSerieById";
import { SerieDatabase } from "../../../data/serieDatabase";

export const getSerieByIdEnpoint = async (req: Request, res: Response) => {
   try {
      const getSerieByIdUC = new GetSerieByIdUC(new SerieDatabase());
      const result = await getSerieByIdUC.execute({
         id: req.params.id
      });

      res.status(200).send(result);
   } catch (err) {
      res.status(err.errorCode || 400).send({
         message: err.message,
         ...err
      })
   }
}