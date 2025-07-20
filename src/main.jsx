import { StrictMode, use } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home/Home'
import ErrorPage from './component/ErrorPage/ErrorPage'
import About from './component/About/About'
import HomeBody from './component/HomeBody/HomeBody'
import Contect from './component/Contect/Contect'
import Users from './component/Users/Users'
import Posts from './component/Posts/Posts'
import UsersDetails from './component/UserDetails/UsersDetails'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element:  <HomeBody></HomeBody>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contect',
        element: <Contect></Contect>
      },
      {
        path: '/users',
        loader: ()=> fetch('/data/usersData.json'),
        element: <Users></Users>
      },
      {
        path: '/posts',
        element: <Posts></Posts>
      },
      {
        path:'/user/:userId',
        loader: async ({params}) =>{
            const res = await fetch('/data/usersData.json');
            const users = await res.json();
           const user = users.find(u => u.id === parseInt(params.userId));
           return user;
        },
        element: <UsersDetails></UsersDetails>
      }
    ]
      }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
