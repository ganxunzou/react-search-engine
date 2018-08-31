import React, { Component } from 'react';

import style from './index.less';

export default class ListItem extends Component {
	constructor(props) {
		super();
		this.state = {
			data: props && props.data
		};
	}
	componentWillReceiveProps(nextProps) {
		let {data} = this.state;
		if('data' in nextProps) {
			this.setState({data: nextProps.data})
		}
	}
	
	render() {
		let {data} = this.state;
		return (
			<div>
				<div className={style.title} dangerouslySetInnerHTML={{__html: data.title}}></div>
				<div className={style.desc} dangerouslySetInnerHTML={{__html: data.desc}}></div>
				<div className={style.likes} >{data.likes} 点赞</div>
			</div>
		);
	}
}
