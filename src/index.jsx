// polyfill stable `core-js` features - ES and web standards:
import 'core-js/stable';
import 'whatwg-fetch';

import { render } from 'react-dom';
import React from 'react';
import App from './App';

// Dynamically create div
let root = document.createElement('div');
root.id = 'root';

// Append to body
document.body.appendChild(root);

// Render the app into the div
render(<App />, document.getElementById('root'));
