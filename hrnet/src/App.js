import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateEmployee from "./components/CreateEmployee";
import EmployeeList from "./components/EmployeeList";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CreateEmployee/>} />
                <Route path="/employeeLIst" element={<EmployeeList/>} />
            </Routes>
        </Router>
    );
}

export default App;
