import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import UrlScanner from './pages/UrlScanner';
import MessageScanner from './pages/MessageScanner';
import Layout from './components/Layout';
import Terms from './pages/Terms';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/scan-url" element={<UrlScanner />} />
          <Route path="/scan-message" element={<MessageScanner />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
