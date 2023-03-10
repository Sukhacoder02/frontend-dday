import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EntriesPage from './pages/EntriesPage';
import ContentTypesPage from './pages/ContentTypesPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>React APP</div>} />
          <Route
            path="/login"
            element={<LoginPage title="Login to your CMS+ account" buttonText="Login" login={true} />}
          />
          <Route path="/signup" element={<LoginPage title="Signup with CMS+" buttonText="Sign Up" login={false} />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/entries" element={<EntriesPage />} />
          <Route path="/content-types" element={<ContentTypesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
