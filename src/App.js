import LoginPage from "./pages/Login.page";
import {
  Routes,
  Route,
} from "react-router-dom";
import NotFound from "./pages/NotFound.page";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
