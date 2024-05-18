export default class Movie {
    private title: string;
    private enTitle: string;
    private year: number;
    private country: string;
    private slogan: string;
    private genres: string[];
    private duration: string | number;
    private price: number;
    private id: number;

    constructor(title: string, enTitle: string, year: number, country: string, slogan: string, genres: string[], duration: string | number, price: number, id: number) {
        this.title = title;
        this.enTitle = enTitle;
        this.year = year;
        this.country = country;
        this.slogan = slogan;
        this.genres = genres;
        this.duration = duration;
        this.price = price;
        this.id = id;
    }

    public getInfo() {
        const info = {
            title: this.title,
            enTitle: this.enTitle,
            year: this.year,
            country: this.country,
            slogan: this.slogan,
            genres: this.genres,
            duration: this.duration,
            price: this.price,
            id: this.id
        }
        return info
    }

    public static createMovie(title: string, enTitle: string, year: number, country: string, slogan: string, genres: string[], duration: string | number, price: number, id: number) {
        return new Movie(title, enTitle, year, country, slogan, genres, duration, price, id);
    }

    public static getPrice(movie: Movie) {
        return movie.price;
    }

    public static getId(movie: Movie) {
        return movie.id;
    }
}