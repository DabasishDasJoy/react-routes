import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import FriendDetails from "../components/FriendDetails/FriendDetails";
import Friends from "../components/Friends/Friends";
import Home from "../components/Home/Home";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
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
    element: <notFound></notFound>,
  },
]);
