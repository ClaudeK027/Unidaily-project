import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './store';
import { GlobalStyle, theme } from './styles/globalStyles';

import Navigation from './components/Navigation'; // Assurez-vous d'importer le composant Navigation
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import SchedulePage from './pages/SchedulePage';
import ProfilePage from './pages/ProfilePage';
import EventsPage from './pages/EventsPage'; // N'oubliez pas d'importer EventsPage


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Composant route protégée
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          {/* Navigation est placée ici pour qu'elle soit affichée sur toutes les pages protégées */}
          {isAuthenticated && <Navigation />} 

          <Routes>
            {/* Route pour la page de connexion */}
            <Route path="/" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
            
            {/* Routes protégées */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } />
            
            <Route path="/schedule" element={
              <ProtectedRoute>
                <SchedulePage />
              </ProtectedRoute>
            } />

            <Route path="/profile" element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } />

            <Route path="/events" element={
              <ProtectedRoute>
                <EventsPage /> {/* Ajout de la page Events */}
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
