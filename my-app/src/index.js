/*
* @Author: Administrator
* @Date:   2017-12-25 20:39:18
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-25 23:03:30
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const user = {
    firstName: 'shao',
    lastName: 'kally'
}
const ele = <h1>hello, {user.lastName}!</h1>


ReactDOM.render(
    ele,
    document.getElementById('root')
);

