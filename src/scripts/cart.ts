import Movie from "./movie";

export default class Cart {
    private items: Movie[] = [];

    addItem(movie: Movie) {
        this.items.push(movie);
    }

    getItems() {
        return this.items;
    }
}