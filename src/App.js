import LoginPage from "./pages/Login.page";
import {
  Routes,
  Route,
} from "react-router-dom";
<<<<<<< HEAD
import NotFound from "./pages/NotFound.page";
=======
import SignUp from "./pages/Signup.page";
import SuperAdminPage from "./pages/SuperAdmin.page";
>>>>>>> 06ee3ccd344d36046b4599cb767bd550fa8c42b5

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
