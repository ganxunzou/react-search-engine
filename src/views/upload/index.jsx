import React, { Component } from 'react';
import { Upload, Icon, message, Layout } from 'antd';
const Dragger = Upload.Dragger;
const { Header, } = Layout;
import { Link } from 'react-router-dom';
import style from './index.less';

const props = {
	name: 'file',
	multiple: true,
	action: '//jsonplaceholder.typicode.com/posts/',
	onChange(info) {
		const status = info.file.status;
		if (status !== 'uploading') {
			console.log(info.file, info.fileList);
		}
		if (status === 'done') {
			message.success(`${info.file.name} file uploaded successfully.`);
		} else if (status === 'error') {
			message.error(`${info.file.name} file upload failed.`);
		}
	}
};

export default class UploadView extends Component {
	render() {
		return (
			<Layout style={{ height: '100%' }}>
				<Header className>
					<div className={style.logo}>
						<Link to="/">Search Engine</Link>
					</div>
				</Header>
				<Layout className={style.dragContainer}>
					<div>
						<h3 className={style.title}>文档上传</h3>		
					</div>
					<Dragger {...props}>
						<div className={style.dragContent}>
							<div>
								<p className="ant-upload-drag-icon">
									<Icon type="inbox" />
								</p>
								<p className="ant-upload-text">
									Click or drag file to this area to upload
								</p>
								<p className="ant-upload-hint">
									Support for a single or bulk upload. Strictly prohibit from
									uploading company data or other band files
								</p>
							</div>
						</div>
					</Dragger>
				</Layout>
			</Layout>
		);
	}
}
