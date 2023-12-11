import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./Pages/Login/LoginPage";
import LandingPage from "./Pages/Landing/LandingPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/LandingPage" element={<LandingPage />} />
      {""}
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
