import axios from 'axios';

const url = 'https://gardenproject-server.herokuapp.com/api/auth';
const levelUrl = 'https://gardenproject-server.herokuapp.com/api/level';
const questionUrl = 'https://gardenproject-server.herokuapp.com/api/questions'

const config = {
    header: {
       'Content-Type': 'Application/json',
    },
 }

export const createAccount = (user) => axios.post(`${url}/register`, user, config)
export const login = (user) => axios.post(`${url}/login`, user, config)

export const fetchQuestions = () => axios.get(questionUrl)
export const createLevel = (body) => axios.post(`${levelUrl}/${body.uuid}`, body, config)
export const fetchLevel = (uuid) => axios.get(`${levelUrl}/${uuid}`)
export const modifyLevel = (user) => axios.put(`${levelUrl}/${user._id}`, user, config)

