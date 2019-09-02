/** @format */

import { RouterModule } from '@typings/router';
import { lazy } from 'react';

const componentRouter: RouterModule = {
    name: '组件',
    base: '/component',
    key: 'component',
    isShow: true,
    pages: [
        {
            name: 'home',
            key: 'home',
            path: '',
            component: lazy(() => import('../pages/component/index')),
            isShow: true,
        },
        {
            name: 'ellipsis',
            key: 'ellipsis',
            path: '/ellipsis',
            component: lazy(() => import('../pages/component/ellipsis/index')),
            isShow: true,
        },
    ],
};

export default componentRouter;
