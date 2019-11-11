import axios from 'axios';

const baseUrl = 'https://eac2ba49-471c-41fb-bc72-d2d51960827f.mock.pstmn.io';

const getUserById = (id) => axios.get(`${baseUrl}/user/${id}`);

const login = (username, password) => axios.post(`${baseUrl}/login`, {},
    { auth: { username, password } }
);

export {
    getUserById,
    login
};
