import React, { Component } from "react";

class Item extends Component {
	render() {
		let { data, isLike } = this.props;
		return (
			<li style={{marginBottom: '15px', borderBottom: '1px dashed #eee'}}>
				<div
					style={{
						width: 32,
            height: 34,
						float: "left",
						background: "#C8E9DE"
					}}
				>
					<p
						style={{
							color: "#017E66",
							height: "17px",
							lineHeight: "17px",
							textAlign: "center",
							fontSize: "12px",
							padding: 0,
							margin: 0
						}}
					>
						{isLike ? 'like' : 'DL'}
					</p>
					<p
						style={{
							color: "#017E66",
              height: "20px",
              textAlign: "center",
              fontWeight: 600,
              background: "#EBF7F3",
              fontSize: "14px",
							padding: 0,
							margin: 0
						}}
					>
						99
					</p>
				</div>
				<div style={{ paddingLeft: 40 }}>
					<p style={{height: '20px', fontSize: '14px', color: '#333', margin:0 }}>{data.title}</p>
					<p style={{height: '20px', fontSize: '12px', color: '#999'}}>
						<span>ganxz</span>
            <span style={{padding: '0 10px'}}>·</span>
						<span>2018-09-08</span>
					</p>
				</div>
			</li>
		);
	}
}

export default Item;
