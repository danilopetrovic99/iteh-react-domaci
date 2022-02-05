import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'

function App() {
  return (
    <div className="main_div">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
