import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';
// 样式重置
require('normalize.css/normalize.css');

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
