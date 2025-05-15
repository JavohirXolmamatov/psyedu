import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout";
import { ErrorPage } from "./components";
import {
  BeginnerTest,
  Education,
  Information,
  LastTest,
  MainPages,
  RegularTest,
  Results,
  Sertificate,
} from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <MainPages />,
        },
        {
          path: "personal-info",
          element: <Information />,
        },
        {
          path: "education-wrapper",
          element: <Education />,
        },
        {
          path: "results",
          element: <Results />,
        },
        {
          path: "certificate-programs",
          element: <Sertificate />,
        },
        {
          path: "beginner-test",
          element: <BeginnerTest />,
        },
        {
          path: "regular-test",
          element: <RegularTest />,
        },
        {
          path: "last-test",
          element: <LastTest />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
