import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const getPersonal= async () => {
  try{
    const response = await axios.get(`${API_URL}/accion`);
    return response.data;
  } catch (error) {
    console.log("Error fetchin tipo documentacion", error);
    throw error;
  }
};


