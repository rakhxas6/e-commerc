import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Detail from "./pages/Detail.jsx";
import Checkout from "./pages/Checkout.jsx";
import SignIn from "./pages/SignIn.jsx";
import Error from "./pages/Error.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  

  
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Route: Redirect to Home if authenticated */}
        <Route
          path="/"
          element={
            isAuthenticated ? <Layout /> : <Navigate to="/signin" replace />
          }
        >
          <Route index element={<Home />} />
          <Route path="/:slug" element={<Detail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/error" element={<Error />} />
        </Route>

        {/* SignIn Route */}
        <Route path="/signin" element={<SignIn  />} />

        {/* Catch all unmatched routes */}
        <Route path="*" element={<Navigate to="/signin" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
