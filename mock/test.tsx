/** @format */

import Mock from 'mockjs';
import { user } from './mock';

const res = () => {
    return user;
};

export default Mock.mock('api/user', 'get', res);
