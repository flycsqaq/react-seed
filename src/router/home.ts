/** @format */

import { RouterModule } from '@typings/router';
import { lazy } from 'react';

const HomeRouter: RouterModule = {
    name: '主页',
    key: 'home',
    base: '/',
    isShow: true,
    pages: [
        {
            name: 'home',
            path: '',
            key: 'home',
            component: lazy(() => import('../pages/home/index')),
            isShow: true,
        },
    ],
};

export default HomeRouter;
