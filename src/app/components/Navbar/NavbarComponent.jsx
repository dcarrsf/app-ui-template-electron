import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles({
    root: {
        flex: '1 1 auto',
        display: 'flex',
        justifyContent: 'space-between'
    },
    button: {
        color: 'white',
        fontSize: '0.5rem',
        fontWeight: 100
    },
    selected: {
        backgroundColor: 'rgba(0,0,0,0.4)'
    }
});
export default function NavbarComponent(props) {
    const { views, selectedIndex, navigate } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {views.map(({ name }, i) => (
                <Button
                    key={i}
                    className={classNames(classes.button, {
                        [classes.selected]: i === selectedIndex
                    })}
                    onClick={() => navigate(i)}
                >
                    {name}
                </Button>
            ))}
        </div>
    );
}

NavbarComponent.propTypes = {
    views: PropTypes.array,
    selectedIndex: PropTypes.number,
    navigate: PropTypes.func
};
