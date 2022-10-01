import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import FriendDetails from "./components/FriendDetails/FriendDetails";
import Friends from "./components/Friends/Friends";
import Home from "./components/Home/Home";
import Main from "./layouts/Main";
import NotFound from "./layouts/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/friends",
          element: <Friends></Friends>,
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
        },
        {
          path: "/friend/:friendId",
          element: <FriendDetails></FriendDetails>,
          loader: async ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.friendId}`
            );
          },
        },
      ],
    },
    {
      path: "*",
      element: <NotFound></NotFound>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
