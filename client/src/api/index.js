import axios from 'axios';

const url = 'http://localhost:3001/api/auth';
const levelUrl = 'http://localhost:3001/api/level';

const config = {
    header: {
       'Content-Type': 'Application/json',
    },
 }

export const createAccount = (user) => axios.post(`${url}/register`, user, config)
export const login = (user) => axios.post(`${url}/login`, user, config)
export const createLevel = (uuid) => axios.post(`${levelUrl}/${uuid}`, uuid, config)
export const fetchLevel = (uuid) => axios.get(`${levelUrl}/${uuid}`, '', config)
export const modifyLevel = (user) => axios.get(`${levelUrl}/${user.uuid}`, user, config)

