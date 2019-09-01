/** @format */

import { FunctionComponent } from 'react';

export interface RouterModule {
    key: string;
    base: string;
    name: string;
    isShow: boolean;
    pages: Page[];
}

export interface Page {
    key: string;
    name: string;
    path: string;
    isShow: boolean;
    component: FunctionComponent<any>;
}
