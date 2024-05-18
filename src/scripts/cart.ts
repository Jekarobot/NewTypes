import Movie from "./movie";

export default class Cart {
    private items: Movie[] = [];

    addItem(movie: Movie) {
        this.items.push(movie);
    }

    getItems() {
        return this.items;
    }

    removeItem(id: number) {
        this.items = this.items.filter(item => Movie.getId(item) !== id);
    }
}