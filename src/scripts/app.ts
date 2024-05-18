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
}

