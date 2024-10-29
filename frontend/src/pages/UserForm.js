import React, { useState } from 'react';
import { createUser, updateUser } from '../services/userService';

const UserForm = ({ user = {}, onSave }) => {
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, email };

    try {
      if (user.id) {
        await updateUser(user.id, userData);
      } else {
        await createUser(userData);
      }
      onSave();
    } catch (error) {
      console.error("Error saving user", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className='text-xl font-semibold'>Name:</label>
        <input
          className='block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className='text-xl font-semibold'>Email:</label>
        <input
          className='block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button className="ml-4 mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" type="submit">Save</button>
    </form>
  );
};

export default UserForm;
