import React from "react";
import { Layout, Menu, Icon } from "antd";
import { HashRouter, Route, Link, Switch } from "react-router-dom";

import Home from "./views/home";
import Upload from "./views/Upload";
import SearchList from "./views/searchlist";
import Tags from './views/tags';
import Leader from './views/leaderboard';
import Analyze from './views/analyze';

import BHeader from "./components/BHeader";

export default class App extends React.Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<div>
						<BHeader />
						<Switch>
							<Route exact path="/search" component={SearchList} />
							<Route exact path="/upload" component={Upload} />
							<Route exact path="/tags" component={Tags} />
							<Route exact path="/leader" component={Leader} />
							<Route exact path="/analyze" component={Analyze} />
						</Switch>
					</div>
				</Switch>
			</HashRouter>
		);
	}
}
