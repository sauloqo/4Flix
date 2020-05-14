import { Request, Response } from "express";
import { GetMovieByIdUC } from "../../../business/usecase/movie/getMovieById";
import { MovieDatabase } from "../../../data/movieDatebase";

export const getMovieByIdEndpoint = async (req: Request, res: Response) => {
   try {
      const getMovieByIdUC = new GetMovieByIdUC(new MovieDatabase());
      const result = await getMovieByIdUC.execute({
         id: req.params.id
      });

      res.status(200).send(result);
   } catch (err) {
      res.status(err.errorCode || 400).send({
         message: err.message,
         ...err
      })
   }
};