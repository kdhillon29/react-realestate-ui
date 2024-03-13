import HomePage from "./routes/homePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout/Layout";
import ListPage from "./routes/listPage/ListPage";
import SinglePage from "./routes/singlePage/SinglePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          // path: "/profile",
          // element: <ProfilePage />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />

    // <div className="layout">
    //   <Navbar />
    //   <div className="content">
    //     <HomePage />
    //     <Outlet />
    //   </div>
    // </div>
  );
}

export default App;
