/** @format */

import { RouterModule } from '@typings/router';
import { lazy } from 'react';

const toolRouter: RouterModule = {
    name: '工具',
    base: '/tool',
    key: 'tool',
    isShow: true,
    pages: [
        {
            name: 'home',
            key: 'home',
            path: '',
            component: lazy(() => import('../pages/tool/index')),
            isShow: true,
        },
    ],
};

export default toolRouter;
