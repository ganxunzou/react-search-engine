import React, { Component } from "react";
//import ReactWordCloud from "react-wordcloud";

const words = [
	{ word: "hello", value: 3 },
	{ word: "world", value: 1 },
	{ word: "github", value: 1 },
	{ word: "code", value: 1 }
];

const WORD_COUNT_KEY = "value";
const WORD_KEY = "word";

class TagView extends Component {
	render() {
		return (
			<div>
				{/* <div style={{ width: 600, height: 400 }}>
					<ReactWordCloud
						words={words}
						wordCountKey={WORD_COUNT_KEY}
						wordKey={WORD_KEY}
					/>
				</div> */}
			</div>
		);
	}
}

export default TagView;
