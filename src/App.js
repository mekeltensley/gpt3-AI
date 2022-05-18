import './App.css';

import { Browser as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className='App'>
      <Routes>
        <Route path='/' exact element={<Home/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
