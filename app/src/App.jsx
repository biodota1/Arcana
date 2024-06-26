import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Gamewindow from "./components/Gamewindow";
import MainMenu from "./components/MainMenu";
import Options from "./main_menu/Options";
import Login from "./main_menu/Login";
import Register from "./main_menu/Register";
import About from "./main_menu/About";
import PrivatePath from "./private/PrivatePath";
import OnGame from "./private/OnGame";
import UserMenuLayout from "./private/UserMenuLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Gamewindow />,
    children: [
      {
        index: true,
        Component: () => <MainMenu />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "options",
        element: <Options />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        element: <PrivatePath />,
        children: [
          {
            path: "/ongame",
            element: <OnGame />,
            children: [{ index: true, Component: () => <UserMenuLayout /> }],
          },
        ],
      },
    ],
  },
]);

const content = (
  <div className="min-h-[100vh] bg-black flex justify-center items-center">
    <RouterProvider router={router} />
  </div>
);

function App() {
  return content;
}

export default App;
