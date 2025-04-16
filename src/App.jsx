// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import Main from './components/main';
import Modal from './components/Modal';
import SupportModal from './components/SupportModal'; // use modal instead of routing to thank-you page

function App() {
  const isSupportModalOpen = useSelector((state) => state.ui.isSupportModalOpen);

  return (
    <Router>
      <div className="wrapper">
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>

        <Modal />

        {isSupportModalOpen && <SupportModal />}
      </div>
    </Router>
  );
}

export default App;
