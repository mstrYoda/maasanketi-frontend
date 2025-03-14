import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Results from './pages/Results';
import CreateSurvey from './pages/CreateSurvey';
import OngoingSurveys from './pages/OngoingSurveys';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/results" element={<Results />} />
        <Route path="/create-survey" element={<CreateSurvey />} />
        <Route path="/ongoing-surveys" element={<OngoingSurveys />} />
      </Routes>
    </div>
  );
}

export default App;
