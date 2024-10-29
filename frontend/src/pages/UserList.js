import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../services/userService';
import UserForm from './UserForm';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const usersData = await getUsers();
      setUsers(usersData);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  const handleDelete = async (id) => {
    console.log("Usuario eliminado ", id);
    try {
      await deleteUser(id);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  const handleEdit = (user) => {
    console.log("Usuario editado ", user);
    setEditingUser(user);
  };

  const handleAdd = () => {
    setEditingUser({});
    console.log("Usuario agregado");
  };

  const handleSave = async () => {
    try {
      await fetchUsers(); 
      setEditingUser(null);
    } catch (error) {
      console.error('Error refreshing user list', error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className='text-center mt-10 font-bold text-xl'>User List</h1>
      
      {/* Barra de búsqueda y botón de agregar usuario */}
      <div className="flex justify-between items-center mt-4 mb-6">
        <input 
          type="text" 
          placeholder="Search users..." 
          value={searchTerm} 
          onChange={handleSearch} 
          className="border border-gray-300 px-4 py-2 rounded w-1/2"
        />
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
          onClick={handleAdd}
        >
          Add User
        </button>
      </div>
      
      {editingUser && (
        <UserForm user={editingUser} onSave={handleSave} />
      )}

      {/* Lista de usuarios con sombra */}
      <ul className='shadow-lg p-4 rounded-lg'>
        {filteredUsers.map(user => (
          <li key={user.id} className="flex justify-between items-center border-b border-gray-200 py-2">
            <span>{user.name} - {user.email}</span>
            <div>
              <button 
                className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
                onClick={() => handleEdit(user)}
              >
                Edit
              </button>
              <button 
                className="ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" 
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
