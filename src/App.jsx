import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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
  return (
    <div>
      {loading ? <Loader /> : <RouterProvider router={routes} />}
    </div>
  );
}

export default App;
