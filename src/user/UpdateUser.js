import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {
     let { id } = useParams();
    const idU = localStorage.getItem("id");
    const navigate = useNavigate();
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        address: '',
        country: '',
        phoneNumber: '',
        picture: '',
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost/OpenCart/back/controllers/api_user_rest.php?id=${id}`);
                setUser(response.data);  // Assuming the response has the user object directly
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, [id]);

    console.log(id);

    const handleChange = (e) => {
        const { name,
            value } = e.target;
            setUser({ ...user, [name]: value });
            };
            
            const handleSubmit = async (e) => {
                e.preventDefault();
            
                try {
                    const response = await axios.put(`http://localhost/OpenCart/back/controllers/api_user_rest.php?id=${id}`, user);
            
                    if (response.status === 200) {
                        console.log(response);
                        console.log('User updated successfully:', response.data);
                        navigate('/'); // Replace with your path
                    } else {
                        console.error('Failed to update user:', response.status, response.data);
                    }
                } catch (error) {
                    console.error("There was a problem with the update operation:", error);
                }
            };

            const modifierUtilisateur = async (e) => {
                console.log('ID:', id);
                console.log('Données utilisateur:', user);

                e.preventDefault();

                try {
                  const response = await fetch(`http://localhost/OpenCart/back/controllers/api_user_rest.php?id=${id}`, {
                    method: 'PUT', // ou 'POST', selon votre API
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user)
                  });
              
                  console.log(id);
                  if (!response.ok) {
                    throw new Error('Erreur lors de la mise à jour de l’utilisateur');
                  }
              
//  const responseData = await response.json();
//     console.log('Réponse du serveur:', responseData);
const textResponse = await response.text();
console.log('Réponse brute du serveur:', textResponse);

                } catch (error) {
                    if (error.response) {
                      console.error('Erreur du serveur:', error.response.data);
                    } else {
                      console.error('Erreur:', error.message);
                    }
                  }
                  
              };
              
            // const handleSubmit = async (e) => {
            //     e.preventDefault();
              
            //     try {
            //       const requestOptions = {
            //         method: 'PUT',
            //         headers: {
            //           'Content-Type': 'application/json',
            //           'Access-Control-Allow-Origin': '*', // Adjust this as needed
            //         },
            //         body: JSON.stringify(user),
            //       };
              
            //       const response = await fetch(`http://localhost/OpenCart/back/controllers/api_user_rest.php?id=${id}`, requestOptions);
              
            //       if (response.status === 200) {
            //         const data = await response.json();
            //         console.log('User updated successfully:', data);
            //         navigate('/'); // Replace with your path
            //       } 
               
            //     } catch (error) {
            //       console.error('There was a problem with the update operation:', error);
            //     }
            //   };
              
            
            return (
                <div>
                    <h1>Update User</h1>
                    <form onSubmit={modifierUtilisateur}>
                        <div>
                            <label>First Name:</label>
                            <input
                                name="firstName"
                                type="text"
                                value={user.firstName}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label>Last Name:</label>
                            <input
                                name="lastName"
                                type="text"
                                value={user.lastName}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label>Address:</label>
                            <input
                                name="address"
                                type="text"
                                value={user.address}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label>Country:</label>
                            <input
                                name="country"
                                type="text"
                                value={user.country}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label>phoneNumber:</label>
                            <input
                                name="phoneNumber"
                                type="text"
                                value={user.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label>picture:</label>
                            <input
                                name="picture"
                                type="text"
                                value={user.picture}
                                onChange={handleChange}
                            />
                        </div>


                        
                        <button type="submit">Update User</button>
                    </form>
                </div>
            );
        }

        export default UpdateUser;                        