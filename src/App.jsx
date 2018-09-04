import React from "react";
import { Layout } from "antd";
import { HashRouter, Route, Switch } from "react-router-dom";

const { Footer } = Layout;
import Home from "./views/home";
import Upload from "./views/Upload";
import SearchList from "./views/searchlist";
import Tags from "./views/tags";
import Leader from "./views/leaderboard";
import Analyze from "./views/analyze";

import BHeader from "./components/BHeader";

export default class App extends React.Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<div>
						<BHeader />
						<div style={{minHeight: '680px'}}>
							<Switch>
								<Route exact path="/search" component={SearchList} />
								<Route exact path="/upload" component={Upload} />
								<Route exact path="/tags" component={Tags} />
								<Route exact path="/leader" component={Leader} />
								<Route exact path="/analyze" component={Analyze} />
							</Switch>
						</div>
						<Footer style={{ textAlign: "center", backgroundColor: "#FFF" }}>
							版本 ©2018 交通银行软件开发中心（上海）所有
						</Footer>
					</div>
				</Switch>
			</HashRouter>
		);
	}
}
