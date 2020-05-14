import { Serie } from "./serie";
import e from "express";

export class Episode {
   constructor(
      private id: string,
      private title: string,
      private length: number,
      private synopsis: string,
      private link: string,
      private picture: string,
      private serieId: string
   ) { }

   public getId(): string {
      return this.id;
   }

   public setId(id: string): void {
      this.id = id;
   }

   public getTitle(): string {
      return this.title;
   }

   public setTitle(title: string): void {
      this.title = title;
   }

   public getLength(): number {
      return this.length;
   }

   public setLength(length: number) {
      this.length = length;
   }

   public getSynopsis(): string {
      return this.synopsis
   }

   public setSynopsis(synopsis: string): void {
      this.synopsis = synopsis;
   }

   public getLink(): string {
      return this.link;
   }

   public setLink(link: string): void {
      this.link = link;
   }

   public getPicture(): string {
      return this.picture;
   }

   public setPicture(picture: string): void {
      this.picture = picture;
   }

   public getSerieId(): string {
      return this.serieId;
   }

   public setSerieId(serieId: string): void {
      this.serieId = serieId;
   }
}

export class SerieWithEpisodes extends Serie {
   constructor(
      id: string,
      title: string,
      date: Date,
      synopsis: string,
      link: string,
      picture: string,
      private episodes: Episode[]
   ) {
      super(id, title, date, synopsis, link, picture);
   }

   public getEpisodes(): Episode[] {
      return this.episodes;
   }

   public setEpisodes(episodes: Episode): void {
      this.episodes[0] = episodes;
   }
}