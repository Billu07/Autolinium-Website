import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Services from "../components/Services";
import Tools from "../components/Tools";
import Contact from "../components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/tools", element: <Tools /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

const AppRouter: React.FC = () => <RouterProvider router={router} />;

export default AppRouter;
