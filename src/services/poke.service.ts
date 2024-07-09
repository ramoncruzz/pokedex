import axios from 'axios';



const service = axios.create({baseURL: 'https://pokeapi.co/api/v2/', timeout: 3000});


export default service;