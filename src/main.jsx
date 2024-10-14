import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<App />} /> {/* Home component */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard component */}
      </Routes>
    </Router>
  </StrictMode>,

)
