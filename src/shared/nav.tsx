/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import {} from '@typings/prop';
import routerContainer from '@store/router';
import Fab from '@material-ui/core/Fab';

const rootPathRegex = /^\/[^\/]*/;

export default ({ children, location }: any) => {
    const { router } = routerContainer.useContainer();
    const rootPath = rootPathRegex.exec(location.pathname);
    const compareStr = rootPath === null ? '' : rootPath[0];
    return (
        <div>
            {router.map(item => (
                <Link
                    key={item.key}
                    style={{ textDecoration: 'none' }}
                    to={item.base}
                >
                    <Fab
                        color={
                            compareStr === item.base ? 'primary' : 'secondary'
                        }
                    >
                        {item.name}
                    </Fab>
                </Link>
            ))}
            {children}
        </div>
    );
};
