import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";
// Components
import MainLayout from "./layout/MainLayout";
import { ErrorPage } from "./components";
import {
  BeginnerTest,
  Education,
  Information,
  LastTest,
  Login,
  MainPages,
  Register,
  RegularTest,
  Results,
  Sertificate,
} from "./pages";

function App() {
  const access_token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  useEffect(() => {}, [access_token, navigate]);

  return (
    <>
      <ToastContainer />

      <Routes>
        <Route
          path="/login"
          element={access_token ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          path="/register"
          element={access_token ? <Navigate to="/" replace /> : <Register />}
        />

        {access_token && (
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPages />} />
            <Route path="/personal-info" element={<Information />} />
            <Route path="/education-wrapper" element={<Education />} />
            <Route path="/results" element={<Results />} />
            <Route path="/certificate-programs" element={<Sertificate />} />
            <Route path="/beginner-test" element={<BeginnerTest />} />
            <Route path="/regular-test" element={<RegularTest />} />
            <Route path="/last-test" element={<LastTest />} />
          </Route>
        )}

        <Route
          path="*"
          element={
            access_token ? <ErrorPage /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </>
  );
}

export default App;
