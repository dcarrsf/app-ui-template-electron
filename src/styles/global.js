export default theme => ({
    '@global': {
        '*::before': {
            boxSizing: 'border-box'
        },
        '*::after': {
            boxSizing: 'border-box'
        },
        html: {
            height: '100%',
            '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)'
        },
        body: {
            height: '100%',
            margin: 0,
            color: '#fff',
            fontFamily: `'OpenSans', sans-serif`,
            fontSize: '1rem',
            backgroundColor: 'black',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
        },
        '#root': {
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        '#errorBoundryRoot': {
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        '#errorBoundryMessage': {
            marginTop: '10px',
            padding: '10px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '3px',
            backgroundColor: 'rgba(0,0,0,0.7)'
        }
    }
});
