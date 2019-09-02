/** @format */

import { RouterModule } from '@typings/router';
import { lazy } from 'react';

const homeRouter: RouterModule = {
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

export default homeRouter;
