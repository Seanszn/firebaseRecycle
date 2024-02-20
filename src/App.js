import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


import Home from "./pages/Home";

import Bins from "./pages/About";

import Admin from "./pages/admin";

import BinManage from './pages/binManage';

import UserManage from './pages/userManage';

function App() {
  return (
      <>
          {/* This is the alias of BrowserRouter i.e. Router */}
          <Router>
              <Routes>
                  <Route
                      exact
                      path="/"
                      element={<Home />}
                  />

                  <Route
                      path="/bins"
                      element={<Bins />}
                  />
                  <Route
                      path="/admin"
                      element={<Admin />}
                  />
                  <Route
                  path = "/binManage"
                  element = {<BinManage/>}
                  />

                <Route
                  path = "/userManage"
                  element = {<UserManage/>}
                  />
                  <Route
                      path="*"
                      element={<Navigate to="/" />}
                  />
              </Routes>
          </Router>
      </>
  );
}

export default App;