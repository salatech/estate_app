import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key':'2f5c6d2a32msh9e2b0c82e5f02b0p157c87jsn2e055bd7931c' ,
    },
  });
    
  return data;
}