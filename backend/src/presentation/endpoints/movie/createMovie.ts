import { Request, Response } from 'express';
import { CreateMovieUC } from '../../../business/usecase/movie/createMovie';
import { MovieDatabase } from '../../../data/movieDatebase';

export const createMovieEndpoint = async (req: Request, res: Response) => {
   try {
      const createMovieUC = new CreateMovieUC(new MovieDatabase());
      const result = await createMovieUC.execute({
         title: req.body.title,
         date: req.body.date,
         length: req.body.length,
         synopsis: req.body.synopsis,
         link: req.body.link,
         picture: req.body.picture
      })

      res.status(200).send(result)
   } catch (err) {
      res.status(err.errorCode || 400).send({
         message: err.message,
         ...err
      });
   }
};