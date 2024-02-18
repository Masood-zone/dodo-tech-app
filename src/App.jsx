import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Products from "./pages/products";
import Features from "./pages/features";
import Industries from "./pages/industries";
import Pricing from "./pages/pricing";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgot";
import ResetPassword from "./pages/forgot/reset";
import NotFound from "./pages/notfound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/features" element={<Features />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/pricing" element={<Pricing />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
