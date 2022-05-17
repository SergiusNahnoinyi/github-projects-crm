import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from './components/Container';
import AppBar from './components/AppBar';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <AppBar />
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="login" element={<LoginPage />} />
          </Routes>
        </Suspense>
        <ToastContainer />
      </Container>
    </BrowserRouter>
  );
}
