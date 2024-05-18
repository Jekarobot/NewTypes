import App from "../app";
import Movie from "../movie";
import Cart from "../cart";

describe("App works", () => {
    it("App addToCart", () => {
      const app = new App();
      const movie = Movie.createMovie("Матрица", "The Matrix", 1999, "USA", "Добро пожаловать в реальный мир", ["Sci-Fi", "Action"], 120, 100, 1);
      app.addToCart(movie);
      expect(app.getCartItems()).toEqual([movie]);
  })

    it("App getCartPrice", () => {
        const app = new App();
        const movie = Movie.createMovie("Матрица", "The Matrix", 1999, "USA", "Добро пожаловать в реальный мир", ["Sci-Fi", "Action"], 120, 100, 1);
        const movie2 = Movie.createMovie("Побег из Шоушенка", "The Shawshank Redemption", 1994, "USA", "Страх - это кандалы. Надежда - это свобода", ["Drama"], 142, 150, 2);
        app.addToCart(movie);
        app.addToCart(movie2);
        expect(app.getCartPrice()).toEqual(250);
    })

    it("App getCartPriceWithDiscount", () => {
        const app = new App();
        const movie = Movie.createMovie("Матрица", "The Matrix", 1999, "USA", "Добро пожаловать в реальный мир", ["Sci-Fi", "Action"], 120, 100, 1);
        const movie2 = Movie.createMovie("Побег из Шоушенка", "The Shawshank Redemption", 1994, "USA", "Страх - это кандалы. Надежда - это свобода", ["Drama"], 142, 150, 2);
        app.addToCart(movie);
        app.addToCart(movie2);
        expect(app.getCartPriceWithDiscount(0.2)).toEqual(200);
    })

    it("App removes item from cart", () => {
        const app = new App();
        const movie = Movie.createMovie("Матрица", "The Matrix", 1999, "USA", "Добро пожаловать в реальный мир", ["Sci-Fi", "Action"], 120, 100, 1);
        const movie2 = Movie.createMovie("Побег из Шоушенка", "The Shawshank Redemption", 1994, "USA", "Страх - это кандалы. Надежда - это свобода", ["Drama"], 142, 150, 2);
        app.addToCart(movie);
        app.addToCart(movie2);
        app.removeItem(1);
        expect(app.getCartItems()).toEqual([movie2]);
    })
})