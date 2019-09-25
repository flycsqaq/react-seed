/** @format */
import React, { Suspense } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { Switch, HashRouter, Route, Redirect } from 'react-router-dom';
import theme from './theme.json';
import 'typeface-roboto';

import ProviderContainer from './store';
import AppNav from '@shared/nav';
import routerContainer from '@store/router';

const Router = () => {
    const { router } = routerContainer.useContainer();
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Switch>
                {router.map(item =>
                    item.pages.map(it => (
                        <Route
                            key={it.key}
                            exact
                            path={it.path}
                            component={it.component}
                        />
                    )),
                )}
                <Redirect from={'**'} to={'/'} />
            </Switch>
        </Suspense>
    );
};

const App = () => {
    return (
        <ThemeProvider theme={createMuiTheme(theme)}>
            <CssBaseline />
            <ProviderContainer>
                <HashRouter>
                    <Switch>
                        <AppNav>
                            <Router />
                        </AppNav>
                    </Switch>
                </HashRouter>
            </ProviderContainer>
        </ThemeProvider>
    );
};

export default App;
