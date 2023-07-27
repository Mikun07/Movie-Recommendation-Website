import HomeOulet from "../../pages/Home/HomeOutlet";
import AllMoviesOulet from "../../pages/AllMovies/AllMoviesOutlet";
import MovieDetailsOutlet from "../../pages/Details/MovieDetailsOutlet";


export const PUBLIC_ROUTES = [
    {href: "/", element: <HomeOulet />},
    {href: "/allmovies", element: <AllMoviesOulet />},
    {href: "/movies/:movieId", element: <MovieDetailsOutlet />},
];