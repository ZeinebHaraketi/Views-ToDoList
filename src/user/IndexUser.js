import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./IndexUser.css";
import { useNavigate } from 'react-router-dom';

function IndexUser() {
  //GET
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // Initialisez navigate
  const [selectedUser, setSelectedUser] = useState(null); // Nouvel état pour l'utilisateur sélectionné


  useEffect(() => {
    // Effectuez une requête GET pour récupérer tous les utilisateurs
    axios.get('http://localhost/OpenCart/back/controllers/api_user_rest.php')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleEditUser = (id) => {
    navigate(`/edit-user/${id}`);
  };

  
  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
        try {
            const url = `http://localhost/OpenCart/back/controllers/api_user_rest.php/${id}`;
            console.log("Deleting user with ID:", id); 
const response = await axios.delete(url);
navigate("/");
// Optionally, you could refresh the data or page here
} catch (error) {
console.error("Error deleting user: ", error);
// Handle the error appropriately
}}};
const showUserDetails = async (id) => {
  try {
    const response = await axios.get(`http://localhost/OpenCart/back/controllers/api_user_rest.php?id=${id}`);
    setSelectedUser(response.data);
  } catch (error) {
    console.error("Erreur lors de la récupération des détails de l'utilisateur:", error);
  }
};

  return (
    <div>
   <center><h1>Liste des utilisateurs</h1></center> 
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Adresse</th>
          <th>Pays</th>
          <th>Numéro de téléphone</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user.Id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.address}</td>
            <td>{user.country}</td>
            <td>{user.phoneNumber}</td>
            <td>
              <img src={user.picture} alt={`Image de ${user.firstName} ${user.lastName}`} width="50" height="50" />
            </td>
            <td>
              <button className="action-btn show"  onClick={() => showUserDetails(user.Id)}>Afficher</button>

            </td>
            <td>                
              <button className="action-btn edit" onClick={() => handleEditUser(user.Id)}>Modifier</button>
            </td>
            <td>
              <button className="action-btn delete" onClick={() => deleteUser(user.Id)} >Supprimer</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {selectedUser && (
        <div className="user-details">
          <h3>Détails de l'utilisateur:</h3>
          <p>lastName: {selectedUser.lastName}</p>
          <p>firstName: {selectedUser.firstName}</p>
          <p>Adresse: {selectedUser.address}</p>
          <p>Country: {selectedUser.country}</p>
          <p>phoneNumber: {selectedUser.phoneNumber}</p>

          {/* Affichez d'autres détails de l'utilisateur ici */}
        </div>
      )}
  </div>

  
  );
}

export default IndexUser;
