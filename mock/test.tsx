/** @format */

import Mock from 'mockjs';
import {user} from './mock';

const res = () => {
    return user;
};

export default Mock.mock('124.45.778.12:45/api/user', 'get', res);
