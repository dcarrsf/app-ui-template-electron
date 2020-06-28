import { makeStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import AppBar from './app/components/AppBar';
import ErrorBoundary from './app/components/Error';
import React from 'react';
import store from './app/model/Store';
import styles from './styles/global';
import WebView from './app/components/WebView';

const useStyles = makeStyles(styles);

export default function App() {
    useStyles();
    return (
        <ErrorBoundary>
            <Provider store={store}>
                <WebView />
                <AppBar />
            </Provider>
        </ErrorBoundary>
    );
}
