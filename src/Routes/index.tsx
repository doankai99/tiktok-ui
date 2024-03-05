import Home from "../Page/Home";
import Following from "../Page/Following";
import Profile from "../Page/Profile";
import Upload from "../Page/Upload";
import Search from "../Page/Search";
import Friends from "../Page/Friends";

//Layouts
import HeaderOnly from "../Components/Layout/HeaderOnly";
export const publicRoutes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/following",
        component: Following,
    },
    {
        path: "/profile",
        component: Profile,
    },
    {
        path: "/upload",
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: "/Search",
        component: Search,
        layout: null,
    },
    {
        path: "/friends",
        component: Friends,
    },
];

// export { publicRoutes};