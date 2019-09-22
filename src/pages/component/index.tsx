/** @format */

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import routerContainer from '@store/router';
import uiContainer from '@store/ui';
import { uiKeys } from '@constant/ui';

const key = 'component';

export default () => {
    const { getRouterModule } = routerContainer.useContainer();
    const router = getRouterModule(key);
    const { ui, setUi } = uiContainer.useContainer();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (key: string) => {
        setUi(key);
        setAnchorEl(null);
    };
    return (
        <div>
            <Button
                aria-controls="uikeys-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                {ui}
            </Button>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {uiKeys.map(item => {
                    return (
                        <MenuItem onClick={() => handleClose(item)}>
                            {item}
                        </MenuItem>
                    );
                })}
            </Menu>
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
