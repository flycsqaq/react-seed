/** @format */
import homeRouter from './home';
import blogRouter from './blog';
import componentRouter from './component';
import toolRouter from './tool';
import { RouterModule } from '@typings/router';

const router: RouterModule[] = [homeRouter, blogRouter, componentRouter, toolRouter]
    .filter(item => item.isShow)
    .map(item => {
        return {
            ...item,
            pages: item.pages
                .filter(it => it.isShow)
                .map(it => {
                    return {
                        ...it,
                        key: `${item.key}${it.key}`,
                        path: `${item.base}${it.path}`,
                    };
                }),
        };
    });

export default router;
