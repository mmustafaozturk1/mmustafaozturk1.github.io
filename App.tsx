
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate">
      <Header />
      <main className="flex-grow container mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-24">
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<DetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;