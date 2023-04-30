import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../Main/NewsLayout";
import News from "../Pages/News/News/News";
import LoginLogout from "../Main/LoginLogout";
import Login from "../Pages/LoginRegister/Login/Login";
import Register from "../Pages/LoginRegister/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Accept from "../Pages/Accept/Accept";

  const router = createBrowserRouter([
    {
       path:'/',
       element: <LoginLogout></LoginLogout>,
       children: [
        {
          path:'/',
          element: <Navigate to='/category/0'></Navigate>
        }
        ,
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path:'register',
          element: <Register></Register>
        },
        {
          path:'/accept',
          element: <Accept></Accept>
        }
       ]
    },

    {
      path: "category",
      element: <Main></Main>  ,
      children:[
        {
          path:':id',
          element: <Category></Category>,
          loader: ({params})=> fetch(`http://localhost:3000/categories/${params.id}`)
        }
      ]
    },
    {
      path:'news',
      element: <NewsLayout></NewsLayout>,
      children: [
        {
          path: ':id',
          element: <PrivateRoutes><News></News></PrivateRoutes> ,
          loader: ({params}) => fetch(`http://localhost:3000/news/${params.id}`)
        }
      ]
    },
    
  ]);

export default router;