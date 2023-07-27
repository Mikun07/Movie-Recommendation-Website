import HomeOulet from "../../pages/Home/HomeOutlet";
import AllMoviesOulet from "../../pages/AllMovies/AllMoviesOutlet";
import MyListOutlet from "../../pages/MyList/MyListOutlet";
import MovieDetailsOutlet from "../../pages/Details/MovieDetailsOutlet";
import PageNotFoundOutlet from "../../pages/PageNotFound/PageNotFoundOutlet";

export const PUBLIC_ROUTES = [
    {href: "/", element: <HomeOulet />},
    {href: "/allmovies", element: <AllMoviesOulet />},
    {href: "/mylist", element: <MyListOutlet />},
    {href: "/movies/:movieId", element: <MovieDetailsOutlet />},
    {href: "/pagenotfound", element: <PageNotFoundOutlet />}
];