/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { Props } from '@typings/prop';
import routerContainer from '@store/router';

export default ({ children }: Props) => {
    const { router } = routerContainer.useContainer();
    return (
        <div>
            {router.map(item => (
                <div key={item.key}>
                    <Link to={item.pages[0].path}>{item.name}</Link>
                </div>
            ))}
            {children}
        </div>
    );
};
