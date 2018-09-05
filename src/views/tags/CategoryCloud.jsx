import React, { Component } from "react";
import { TagCloud } from "react-tagcloud";
import {Category} from '../../constant';
import {message} from 'antd';
class CategoryCloud extends Component {
	render() {
		return (
			<div style={{textAlign: 'center', padding: '50px'}}>
				<TagCloud
					minSize={12}
					maxSize={35}
					tags={Category}
					onClick={tag => message.success(`'${tag.value}' was selected!`)}
				/>
			</div>
		);
	}
}

export default CategoryCloud;
