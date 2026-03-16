import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import UrlScanner from './pages/UrlScanner';
import MessageScanner from './pages/MessageScanner';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/scan-url" element={<UrlScanner />} />
        <Route path="/scan-message" element={<MessageScanner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
