import HomeOulet from "../../pages/Home/HomeOutlet";
import BrowseMoviesOulet from "../../pages/BrowseMovies/BrowseMoviesOutlet";

export const PUBLIC_ROUTES = [
    {href: "/", element: <HomeOulet />},
    {href: "/BrowseMovies", element: <BrowseMoviesOulet />},
];