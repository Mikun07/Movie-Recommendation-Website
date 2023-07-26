import HomeOulet from "../../pages/Home/HomeOutlet";
import AllMoviesOulet from "../../pages/AllMovies/AllMoviesOutlet";
import MyListOutlet from "../../pages/MyList/MyListOutlet";

export const PUBLIC_ROUTES = [
    {href: "/", element: <HomeOulet />},
    {href: "/allmovies", element: <AllMoviesOulet />},
    {href: "/mylist", element: <MyListOutlet />},
];