/** @format */

import React from 'react';
import router from '@router/index';
import { Link } from 'react-router-dom';
import { Props } from '@typings/prop';

export default ({children}: Props) => {
    return (
        <div>
            {router.map(item => (
                <div key={item.key}>
                    <div>{item.name}</div>
                    {item.pages.map(it => (
                        <Link key={it.key} to={it.path}>
                            {it.name}
                        </Link>
                    ))}
                </div>
            ))}
            {children}
        </div>
    );
};
