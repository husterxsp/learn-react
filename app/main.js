var React = require('react');
var ReactDOM = require('react-dom');
var QuestionApp = require('./components/QuestionApp.js');

import './main.less';

ReactDOM.render(
    <QuestionApp />,
    document.getElementById('app')
)