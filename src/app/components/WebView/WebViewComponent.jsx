import { createSelector } from 'reselect';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { get } from 'lodash';
import React from 'react';

const selectViews = state => state.nav.views;
const selectSelectedIndex = state => state.nav.selectedIndex;

const selectView = createSelector(selectViews, selectSelectedIndex, (views, selectedIndex) => views[selectedIndex]);

const useStyles = makeStyles({
    root: {
        width: '100%',
        flex: '1 1 auto'
    }
});
export default function WebViewComponent() {
    const view = useSelector(selectView);
    const path = get(view, 'path', 'https://www.google.com');
    const classes = useStyles();
    return <webview id="view" className={classes.root} src={path} />;
}
