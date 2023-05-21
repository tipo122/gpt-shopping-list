import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, provider } from './firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Login from './components/Login';
import './App.css';

function App() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Router>
      {!user && <Navigate to="/login" />}
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
