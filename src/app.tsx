/** @format */

import React, { Suspense } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { Switch, HashRouter, Route, Redirect } from 'react-router-dom';

import theme from './theme.json';
import ProviderContainer from './store';
import router from './router';
import './app.css';

const App = () => {
    return (
        <ThemeProvider theme={createMuiTheme(theme)}>
            <CssBaseline />
            <ProviderContainer>
                <HashRouter>
                    <Switch>
                        <Suspense fallback={<div>loading...</div>}>
                            <Switch>
                                {router.map(item =>
                                    item.pages.map(it => (
                                        <Route
                                            key={it.key}
                                            exact
                                            path={`${item.base}${it.path}`}
                                            component={it.component}
                                        />
                                    )),
                                )}
                                <Redirect from={'**'} to={'/'} />
                            </Switch>
                        </Suspense>
                    </Switch>
                </HashRouter>
            </ProviderContainer>
        </ThemeProvider>
    );
};

export default App;
