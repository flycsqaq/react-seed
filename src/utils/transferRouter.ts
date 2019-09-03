/** @format */

import { RouterModule } from '@typings/router';

export const transferRouter = (router: RouterModule[]): RouterModule[] => {
    return router.map(item => {
        return {
            ...item,
            pages: item.pages.map(it => {
                return {
                    ...it,
                    key: `${item.key}${it.key}`,
                    path: `${item.base}${it.path}`,
                };
            }),
        };
    });
};
