export class Anime {
  constructor(
    public id: number | null = null,
    public name: string = '',
    public imageUrl: string = '',
    public description: string = '',
    public publishYear: number = 0,
    public duration: number = 0,
    public episodesAmount: number = 0,
  ) { }
}
