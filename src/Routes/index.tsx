import Home from "../Page/Home";
import Following from "../Page/Following";
import Profile from "../Page/Profile";
import Upload from "../Page/Upload";
import Search from "../Page/Search";
import Friends from "../Page/Friends";

//Layouts
import HeaderOnly from "../Components/Layout/HeaderOnly";
const publicRoutes = [
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

export { publicRoutes};

// function Routes() {
//     return ( 
//         <h2>Routes page</h2>
//      );
// }

// export default Routes;

//Public and private routes
// interface RouteItem {
//     path: string;
//     component: React.ComponentType<any>;
//     layout?: React.ComponentType<any>;
//   }