/** @format */
import homeRouter from './home';
import blogRouter from './blog';
import componentRouter from './component';
import toolRouter from './tool';
import { RouterModule } from '@typings/router';
import { transferRouter } from '@utils/transferRouter';

const router: RouterModule[] = [homeRouter, blogRouter, componentRouter, toolRouter];

const defaultRouter = transferRouter(router);

export default defaultRouter;
