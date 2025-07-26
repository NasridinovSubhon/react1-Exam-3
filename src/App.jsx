import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from './layout/Layout';
import Services from './pages/Services';
import Stadies from './pages/Stadies';
import About from './pages/About';
import UserById from "./pages/UserById";
import { initAOS } from "./config/aos";
import { useEffect } from "react";

const App = () => {


  useEffect(() => {
    initAOS();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Services />} />
        <Route path="stadies" element={<Stadies />} />
        <Route path="about" element={<About />} />
        <Route path="user/:id" element={<UserById />} />
      </Route>
    )
  )

  return (
    <div className="dark:bg-black dark:text-white bg-white text-black">

      <RouterProvider router={router} />
    </div>
  )
}

export default App
