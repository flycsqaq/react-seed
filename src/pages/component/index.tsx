/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import toolRouter from '@router/tool';
import componentRouter from '@router/component';

export default () => {
    return (
        <div>
            {componentRouter.pages
                .filter(item => item.isShow)
                .map(item => (
                    <Link key={item.key} to={`${toolRouter.base}${item.path}`}>{item.name}</Link>
                ))}
        </div>
    );
};
