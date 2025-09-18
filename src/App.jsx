
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KrishiSahayak from './components/Krishi';
import Login from './Features/login.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<KrishiSahayak />} />

        {/* Route for the login page */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
