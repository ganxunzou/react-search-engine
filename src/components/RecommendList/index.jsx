import React, { Component } from "react";
import Item from "./Item";

const data = [
	{ title: " 对话式AI技能大赛", date: "2018-09-08", user: "ganxz" },
	{ title: " 对话式AI技能大赛", date: "2018-09-08", user: "ganxz" },
	{ title: " 对话式AI技能大赛", date: "2018-09-08", user: "ganxz" },
	{ title: " 对话式AI技能大赛", date: "2018-09-08", user: "ganxz" }
];

class RecommendList extends Component {
  constructor(props){
    super();
    this.state={
      title: props.title,
      isLike: props.isLike
    }
  }
	render() {
		return (
			<div>
				<p>
					<span
						style={{
							fontSize: "16px",
							fontWeight: 500,
							color: "#212121",
							marginBottom: "15px"
						}}
					>
						{this.state.title}
					</span>
					<span style={{float: 'right', color: '#009a61'}}>更多</span>
				</p>
				<ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
					{data &&
						data.map((item, index) => {
							return <Item data={item} isLike={this.state.isLike}/>;
						})}
				</ul>
			</div>
		);
	}
}

export default RecommendList;
