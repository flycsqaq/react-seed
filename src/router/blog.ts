/** @format */

import { RouterModule } from '@typings/router';
import { lazy } from 'react';

const blogRouter: RouterModule = {
    name: '博客',
    base: '/blog',
    key: 'blog',
    isShow: true,
    pages: [
        {
            name: 'home',
            key: 'home',
            path: '',
            component: lazy(() => import('../pages/blog/index')),
            isShow: true,
        },
    ],
};

export default blogRouter;
