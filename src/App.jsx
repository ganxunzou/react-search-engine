import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';

import Home from './views/home';
import Upload from './views/Upload';
import SearchList from './views/searchlist';



export default class App extends React.Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/search" component={SearchList}/>
					<Route exact path="/upload" component={Upload}/>
				</Switch>
			</HashRouter>
		);
	}
}
