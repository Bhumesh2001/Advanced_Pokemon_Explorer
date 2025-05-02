import React, { lazy, Suspense, memo } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { PokemonProvider } from './contexts/PokemonContext';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';
import CompareTool from './components/CompareTool';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const Details = lazy(() => import('./pages/Details'));
const Favorites = lazy(() => import('./pages/Favorites'));

// Memoized Navbar to prevent unnecessary re-renders
const AppNavbar = memo(() => (
  <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
    <Container>
      {/* Left-aligned logo */}
      <Navbar.Brand as={Link} to="/">Pokemon Explorer</Navbar.Brand>

      {/* Hamburger Toggle Button */}
      <Navbar.Toggle aria-controls="main-navbar-nav" />

      {/* Collapsible Nav Links */}
      <Navbar.Collapse id="main-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/compare">Compare</Nav.Link>
          <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
));

function App() {
  return (
    <PokemonProvider>
      <AppNavbar />
      <Container>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            }
            />
            <Route path="/pokemon/:id" element={
              <ErrorBoundary>
                <Details />
              </ErrorBoundary>
            }
            />
            <Route path="/favorites" element={
              <ErrorBoundary>
                <Favorites />
              </ErrorBoundary>
            }
            />
            <Route path="/compare" element={
              <ErrorBoundary>
                <CompareTool />
              </ ErrorBoundary>
            }
            />
          </Routes>
        </Suspense>
      </Container>
    </PokemonProvider>
  );
}

export default App;
