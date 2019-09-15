/** @format */
import homeRouter from './home';
import blogRouter from './blog';
import componentRouter from './component';
import toolRouter from './tool';
import { RouterModule } from '@typings/router';

const router: RouterModule[] = [
    homeRouter,
    blogRouter,
    componentRouter,
    toolRouter,
];

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

const defaultRouter = transferRouter(router);

export default defaultRouter;
