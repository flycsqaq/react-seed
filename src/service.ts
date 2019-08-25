/** @format */

import Axios from 'axios';

const service = Axios.create({});

export const getUser = () => {
    return service.get('api/user');
};
