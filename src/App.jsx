import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import { useEffect, useState, useRef } from "react";
import Loader from "./components/Loader";
import { gsap } from "gsap";

function App() {
  const [loading, setLoading] = useState(true);
  const appRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      gsap.to(appRef.current, { opacity: 1, duration: 1 });
    }
  }, [loading]);

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
      {loading ? (
        <Loader />
      ) : (
        <div ref={appRef} style={{ opacity: 0 }}>
          <RouterProvider router={routes} />
        </div>
      )}
    </div>
  );
}

export default App;
