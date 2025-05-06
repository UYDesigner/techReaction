import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { LayOut } from './components/LayOut/LayOut.jsx'
import Home from './components/Pages/Home.jsx'
import AboutUs from "./components/Pages/AboutUs.jsx"
import ContactUs from "./components/Pages/ContactUs.jsx"
import { User } from './components/User/User.jsx'
import GitHub from './components/GitHub/GitHub.jsx'



// OutLet Method  

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LayOut />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <AboutUs />
//       },
//       {
//         path:"contact",
//         element:<ContactUs/>
//       }
//     ]
//   }
// ])


// Simple route Method

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LayOut />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<AboutUs />} />
      <Route path='contact' element={<ContactUs />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='gitHub/:username' element={<GitHub />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
