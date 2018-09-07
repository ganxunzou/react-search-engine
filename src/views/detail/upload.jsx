import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox, Modal, Upload } from "antd";
const FormItem = Form.Item;
const TextArea = Input.TextArea;
const Dragger = Upload.Dragger;

const formLayoutItem = {
	labelCol: { span: 4 },
	wrapperCol: { span: 20 }
};

class UploadComp extends Component {
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Modal width={700}
				title="文件上传"
        visible={this.props.visible}
        okText="上 传"
        cancelText="取 消"
				onOk={this.props.handleOk}
				onCancel={this.props.handleCancel}
			>
				<Form onSubmit={this.handleSubmit}>
					<FormItem label="版本号" {...formLayoutItem}>
						{getFieldDecorator("version", {
							initialValue: "V1.0.21",
							rules: [{ required: true, message: "请输入版本号" }]
						})(<Input placeholder="请输入版本号" />)}
					</FormItem>
					<FormItem label="修改说明" {...formLayoutItem}>
						{getFieldDecorator("changeLog", {
							rules: [{ required: true, message: "请输入修改说明" }]
						})(<TextArea placeholder="请输入修改说明" />)}
					</FormItem>

					<FormItem label="上传文件" {...formLayoutItem}>
						<Dragger >
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
						</Dragger>
					</FormItem>
				</Form>
			</Modal>
		);
	}
}

export default Form.create()(UploadComp);
