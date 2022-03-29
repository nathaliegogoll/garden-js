import axios from 'axios';

const url = 'http://localhost:3001/api/auth';

const config = {
    header: {
       'Content-Type': 'Application/json',
    },
 }

export const createAccount = (user) => axios.post(`${url}/register`, user, config)

