// react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";

// pages
import ErrorPage from "./pages/ErrorPage";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      // children: [
      //   {
      //     index: true,
      //     element: <MainPage />,
      //   },
      // ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
