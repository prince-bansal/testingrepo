import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateEmployee from "./components/CreateEmployee";
import EmployeeList from "./components/EmployeeList";
import EditEmployee from "./components/EditEmployee";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <nav className="btn btn-warning navbar navbar-expand-lg navheader">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/Createemployee"} className="nav-link">
                    Add Employee
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/EmployeList"} className="nav-link">
                    Employee List
                  </Link>
                </li>
              </ul>
            </div>
          </nav>{" "}
          <br />
          <Routes>
            <Route exact path="/Createemployee" element={<CreateEmployee/>} />
            <Route path="/edit/:id" component={EditEmployee} />
            <Route path="/EmployeList" element={<EmployeeList/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
