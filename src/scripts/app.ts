import Movie from "./movie";
import Cart from "./cart";

export default class App {
    private cart: Cart;

    constructor() {
        this.cart = new Cart();
    }

    public addToCart(movie: Movie) {
        this.cart.addItem(movie);
    }

    public getCartItems() {
        return this.cart.getItems();
    }

    public getCartPrice() {
        return this.cart.getItems().reduce((acc, movie) => acc + Movie.getPrice(movie), 0);
    }

    public getCartPriceWithDiscount(discount: number) {
        return this.getCartPrice() * (1 - discount);
    }

    public removeItem(id: number) {
        this.cart.removeItem(id);
    }
}

