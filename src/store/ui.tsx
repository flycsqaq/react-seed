/** @format */

import React, { Dispatch, useState } from 'react';
import { createContainer } from 'unstated-next';
import { uiKeys } from '@constant/ui';

const uiContainer = createContainer(() => {
    const [ui, setUi]: [string, Dispatch<string>] = useState(uiKeys[0]);
    return {
        ui,
        setUi,
    };
});

export default uiContainer;
