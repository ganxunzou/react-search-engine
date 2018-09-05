import React, { Component } from "react";
import TagCloud from "react-tag-cloud";
import randomColor from "randomcolor";
import { Tags } from "../../constant";
import style from "./index.less";

import {message} from 'antd'
const styles = {
	large: {
		fontSize: 40,
		fontWeight: "bold",
		opacity: 0.8
	},
	normal: {
		opacity: 0.8,
		fontSize: 30
	},
	small: {
		opacity: 0.8,
		fontSize: 20
	}
};

class TagCloudView extends Component {

  itemClick(item) {
    message.success(`${item.value} was selected!`);
  }
  
	render() {
		return (
			<div style={{ display: "flex" }}>
				<TagCloud
					className={style.tagCloud}
					style={{
						//fontSize: () => Math.round(Math.random() * 50) + 16,
						fontSize: 30,
						color: () =>
							randomColor({
								hue: "blue"
							}),
						padding: 5
					}}
				>
					{Tags &&
						Tags.map((item, index) => {
							let fontStyle = styles.normal;
							if (index % 3 == 0) fontStyle = styles.small;
							if (index % 5 == 0) fontStyle = styles.large;
							return (
								<div style={fontStyle} onClick={()=>{this.itemClick(item)}}>
									{item.value}
								</div>
							);
						})}
				</TagCloud>
			</div>
		);
	}
}

export default TagCloudView;
