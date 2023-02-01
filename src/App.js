import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Menu from "./components/nav/Menu";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import PrivateRoute from "./components/Routes/PrivateRoute";
import UserDashboard from "./pages/user/Dashboard";
import PageNotFouond from "./pages/PageNotFouond";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Toaster position="bootom-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<UserDashboard />} />
        </Route>

        <Route path="*" element={<PageNotFouond />} replace />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
