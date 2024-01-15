import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddUser from './user/AddUser';
import IndexUser from './user/IndexUser'; 
import './App.css'; 
import UpdateUser from './user/UpdateUser';


function App() {
  return (
    <Router>
      <div>
      <nav className="nav-bar">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">Accueil</Link>
            </li>
            <li>
              <Link to="/add-user" className="nav-link">Ajouter un utilisateur</Link>

            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/" element={<IndexUser />} />
          {/* <Route path="/edit-user/:id" element={<UpdateUser />} /> Assurez-vous que cette route est définie */}
          <Route path="/edit-user/:id" element={<UpdateUser />} />

        </Routes>

       

      </div>
    </Router>
  );
}

export default App;
