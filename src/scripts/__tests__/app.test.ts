import App from "../app";
import Movie from "../movie";
import Cart from "../cart";

describe("App works", () => {
    it("App addToCart", () => {
      const app = new App();
      const movie = Movie.createMovie("Матрица", "The Matrix", 1999, "USA", "Добро пожаловать в реальный мир", ["Sci-Fi", "Action"], 120);
      app.addToCart(movie);
      expect(app.getCartItems()).toEqual([movie]);
  })
})