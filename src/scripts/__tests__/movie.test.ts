import Movie from "../movie";

describe("Movie", () => {
    it("should return an object with correct properties", () => {
        const movie = new Movie("Матрица", "The Matrix", 1999, "USA", "Добро пожаловать в реальный мир", ["Sci-Fi", "Action"], 120);
        expect(movie.getInfo()).toEqual({ title: "Матрица", enTitle: "The Matrix", year: 1999, country: "USA", slogan: "Добро пожаловать в реальный мир", genres: ["Sci-Fi", "Action"], duration: 120 });
    });
})