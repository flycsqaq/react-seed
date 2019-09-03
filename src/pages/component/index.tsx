/** @format */

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import toolRouter from '@router/tool';
import componentRouter from '@router/component';
import routerContainer from '@store/router';

const key = 'component';

export default () => {
    const { getRouterModule } = routerContainer.useContainer();
    const router = getRouterModule(key);
    return (
        <div>
            {router ? (
                <Fragment>
                    {router.pages.slice(1).map(item => (
                        <Link key={item.key} to={item.path}>
                            {item.name}
                        </Link>
                    ))}
                </Fragment>
            ) : null}
        </div>
    );
};
