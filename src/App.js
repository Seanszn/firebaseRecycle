import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


import Home from "./pages/Home";

import Bins from "./pages/bins";

import Admin from "./pages/admin";

import BinManage from './pages/binManage';

import UserManage from './pages/userManage';

import Deposit from './pages/deposit';

import CreateAccount from './pages/createAccount';

import OldAuth from './pages/oldAuth';

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
                path = "/deposit"
                element = {<Deposit/>} 
                />
                <Route
                path = "/createAccount"
                element = {<CreateAccount/>} 
                />
                <Route
                path = "/oldAuth"
                element = {<OldAuth/>} 
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