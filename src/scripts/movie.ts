export default class Movie {
    private title: string;
    private enTitle: string;
    private year: number;
    private country: string;
    private slogan: string;
    private genres: string[];
    private duration: string | number;

    constructor(title: string, enTitle: string, year: number, country: string, slogan: string, genres: string[], duration: string | number) {
        this.title = title;
        this.enTitle = enTitle;
        this.year = year;
        this.country = country;
        this.slogan = slogan;
        this.genres = genres;
        this.duration = duration;
    }

    public getInfo() {
        const info = {
            title: this.title,
            enTitle: this.enTitle,
            year: this.year,
            country: this.country,
            slogan: this.slogan,
            genres: this.genres,
            duration: this.duration
        }
        return info
    }

    public static createMovie(title: string, enTitle: string, year: number, country: string, slogan: string, genres: string[], duration: string | number) {
        return new Movie(title, enTitle, year, country, slogan, genres, duration);
    }
}