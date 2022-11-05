import LoginPage from "./pages/Login.page";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
