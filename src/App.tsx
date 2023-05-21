import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import MainPage from './pages/MainPage';
import Login from './components/Login';
import './App.css';

function App() {
  const [user] = useAuthState(auth);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#F09A37',
          colorBgContainer: '#282c34',
          colorText: '#fff',
        },
      }}
    >
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
    </ConfigProvider>
  );
}

export default App;
