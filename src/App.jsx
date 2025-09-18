
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KrishiSahayak from './components/Krishi';
import Login from './components/login.jsx';
import Chatbot from './components/Chatbot.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<KrishiSahayak />} />
        <Route path="/login" element={<Login />} />

          <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
