import './styles/style.scss';
/**
 *
 * @param {File} r loaded file for svg sprite
 */
const requireAll = (r) => r.keys().forEach(r)
requireAll(require.context('./img/icons', true, /\.svg$/));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/component/app/app';

const rootElement = document.querySelector('#root');

ReactDOM.render(<App/>, rootElement);
