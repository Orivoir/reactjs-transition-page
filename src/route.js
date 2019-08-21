import Home from './RouteRender/Home' ;
import About from './RouteRender/About' ;
import Factory from './RouteRender/Factory' ;

export const routes = [
    {
        exact: true ,
        path: "/" ,
        name: "home" ,
        render: Home
    } ,
    {
        exact: false ,
        path: "/about" ,
        name: "about" ,
        render: About
        
    } ,
    {
        exact: false ,
        path: "/factory" ,
        name: "factory" ,
        render: Factory
    }
] ;