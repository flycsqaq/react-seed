/** @format */

import Axios from 'axios';

const service = Axios.create({
    baseURL: '124.45.778.12:45',
});

export const getUser = () => {
    return service.get('/api/user');
};
