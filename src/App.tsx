import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Courses from './views/Courses';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;