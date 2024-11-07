import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/accion`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users", error);
    throw error;
  }
};

export const createUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/accion`, user);
    return response.data;
  } catch (error) {
    console.error("Error creating user", error);
    throw error;
  }
};

export const updateUser = async (id, user) => {
  try {
    const response = await axios.put(`${API_URL}/accion/${id}`, user);
    return response.data;
  } catch (error) {
    console.error("Error updating user", error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    console.log("tipo de id", typeof id);
    const response = await axios.delete(`${API_URL}/accion/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user", error);
    throw error;
  }
};