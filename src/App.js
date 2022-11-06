import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login.page";
import NotFound from "./pages/NotFound.page";
import SignUp from "./pages/Signup.page";
import SuperAdminPage from "./pages/SuperAdmin.page";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/superAdmin" element={<SuperAdminPage />} />
    </Routes>
  );
}

export default App;
