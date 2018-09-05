import React, { Component } from "react";
import { Layout } from "antd";
const { Footer } = Layout;
import {withRouter} from 'react-router-dom';
class BFooter extends Component {
	render() {
    let {pathname}  = this.props.history.location;
    console.log(this.props)
		return (
			<Footer style={{ textAlign: "center", backgroundColor:pathname.indexOf('/upload')>=0 ? "#F0F2F5" :  "#FFF" }}>
				版本 ©2018 交通银行软件开发中心（上海）所有
			</Footer>
		);
	}
}

export default withRouter(BFooter);
