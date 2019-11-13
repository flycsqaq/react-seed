/** @format */

import React, { useState } from 'react';
import { JSXEmptyExpression } from '@babel/types';

interface Props {
    Components: React.Component[];
}

const useSingleRender = ({ Components = [] }: Props) => {
    const [finish, setFinish] = useState(false);
    return finish ? null : null;
};
