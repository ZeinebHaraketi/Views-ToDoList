import React, { useState } from 'react';
import axios from 'axios';
import './AddUser.css'; 

function AddUser() {
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    address: '',
    country: '',
    phoneNumber: '',
    picture: '',
  });

  const handleAddUser = () => {
    // Effectuez une requête POST pour ajouter un nouvel utilisateur
    axios.post('http://localhost/OpenCart/back/controllers/api_user_rest.php', newUser)
      .then((response) => {
        console.log('Utilisateur ajouté avec succès');
        // Réinitialisez le formulaire ou effectuez d'autres actions nécessaires
        setNewUser({
          firstName: '',
          lastName: '',
          address: '',
          country: '',
          phoneNumber: '',
          picture: '',
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="add-user-container">
    <h1 className="add-user-title">Ajouter un nouvel utilisateur</h1>
    <form className="add-user-form">
        <label>FirstName:</label>
        <input
          type="text"
          value={newUser.firstName}
          onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
        />

<label>LastName:</label>
        <input
          type="text"
          value={newUser.lastName}
          onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
        />

<label>Adress:</label>
        <input
          type="text"
          value={newUser.address}
          onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
        />

<label>Country:</label>
        <input
          type="text"
          value={newUser.country}
          onChange={(e) => setNewUser({ ...newUser, country: e.target.value })}
        />

<label>phoneNumber:</label>
        <input
          type="text"
          value={newUser.phoneNumber}
          onChange={(e) => setNewUser({ ...newUser, phoneNumber: e.target.value })}
        />

<label className="full-width">Picture:</label>
    <input
      type="file"
      className="full-width"
      onChange={(e) => setNewUser({ ...newUser, picture: e.target.files[0] })}
    />

    <button type="button" className="full-width" onClick={handleAddUser}>Ajouter</button>
        {/* <button type="button" onClick={handleAddUser}>Ajouter</button> */}
      </form>
    </div>
  );
}

export default AddUser;
