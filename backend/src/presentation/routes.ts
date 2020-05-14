import express from "express";
import { createMovieEndpoint } from "./endpoints/movie/createMovie";
import { getMovieByIdEndpoint } from "./endpoints/movie/getMovieById";
import { createSerieEndpoint } from "./endpoints/series/createSerie";
import { createEpisodeEndpoint } from "./endpoints/episode/createEpisode";
import { getEpisodeByIdEndpoint } from "./endpoints/episode/getEpisodeById";
import { getSerieByIdEnpoint } from "./endpoints/series/getSerieById";

const app = express();
app.use(express.json());

app.post('/create/movie', createMovieEndpoint);
app.get('/movie/:id', getMovieByIdEndpoint);

app.post('/create/serie', createSerieEndpoint);
app.get('/serie/:id', getSerieByIdEnpoint);

app.post('/create/episode', createEpisodeEndpoint);
app.get('/episode/:id', getEpisodeByIdEndpoint);

export default app;