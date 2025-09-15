import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./(features)/home/page";
import FlagPage from "./(features)/flag/page";

// Optional: If you want to use loaders (data loading)
// import { loader as flagLoader } from "./(features)/flag/loader";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route 
            path="/games/flag" 
            element={<FlagPage />}
            // loader={flagLoader} // Optional: for data loading
          />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}