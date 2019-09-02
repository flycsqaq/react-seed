/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import toolRouter from '@router/tool';

export default () => {
    return <div>
        {toolRouter.pages.filter(item => item.isShow).map(item => (
            <Link to={`${toolRouter.base}${item.path}`}>
                {item.name}
            </Link>
        ))}
    </div>;
};
