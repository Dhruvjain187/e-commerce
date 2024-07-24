import Index from "./Layout/Index"
import Home from "./Layout/Home"
import Men from "./Layout/Men";
import Women from "./Layout/Women";
import Kid from "./Layout/Kid";
import Login from "./Layout/Login";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import { GlobalStyles } from "./Components/StyledComponents/Global.style";

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Index />}>
      <Route index element={<Home />} />
      < Route path="men" element={< Men />} />
      < Route path="women" element={< Women />} />
      < Route path="kid" element={< Kid />} />
      <Route path="login" element={<Login />} />
    </Route >
  ))
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  )
}
