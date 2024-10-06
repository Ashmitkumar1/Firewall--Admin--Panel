import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./components/Dashboard";
import Datatable from "./components/dataTable";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sites" element={<Datatable />} />
        </Route>
      </Routes>
    </Router>
  );
}
