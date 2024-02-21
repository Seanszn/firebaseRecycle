import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout'; 
import Home from './pages/Home';
import Bins from './pages/bins';
import Admin from './pages/admin';
import BinManage from './pages/binManage';
import UserManage from './pages/userManage';
import Deposit from './pages/deposit';
import CreateAccount from './pages/createAccount';
import OldAuth from './pages/oldAuth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/bins" element={<Layout><Bins /></Layout>} />
        <Route path="/admin" element={<Layout><Admin /></Layout>} />
        <Route path="/binManage" element={<Layout><BinManage /></Layout>} />
        <Route path="/userManage" element={<Layout><UserManage /></Layout>} />
        <Route path="/deposit" element={<Layout><Deposit /></Layout>} />
        <Route path="/createAccount" element={<Layout><CreateAccount /></Layout>} />
        <Route path="/oldAuth" element={<Layout><OldAuth /></Layout>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;