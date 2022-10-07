import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import SearchUniversity from "./component/SearchUniversity";
import UniversityDetails from "./component/UniversityDetails";
import UniversityForm from './component/UniversityForm';
import UniversityList from './component/UniversityList';

function App() {
  return (
    <div className="App">
    <Router>
      <nav>
        <UniversityForm/>
        <div>
          <Link to="/unis">Universities</Link>
        </div>
      </nav>
      <Routes>

        <Route path="/unis" element={
          <UniversityList/>
        }/>

        <Route path="/unis/:name" element={
          <UniversityDetails/>
        } />

        <Route path="search/:query" element={
          <SearchUniversity/>
        } />

      </Routes>

    </Router>

    </div>
  );
}

export default App;
