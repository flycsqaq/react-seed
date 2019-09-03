/** @format */

import React, { Dispatch, useState } from 'react';
import { createContainer } from 'unstated-next';
import { RouterModule } from '@typings/router';
import defaultRouter from '@router/index';

const routerContainer = createContainer(() => {
    const [router, setRouter]: [RouterModule[], Dispatch<RouterModule[]>] = useState(defaultRouter);
    const permissionRouter = router.filter(item => item.isShow).filter(item => item.isShow);
    const getRouterModule = (key: string) => {
        return permissionRouter.find(routerModule => routerModule.key === key);
    };
    return {
        router: permissionRouter,
        getRouterModule,
    };
});

export default routerContainer;
