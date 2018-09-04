import React, { Component } from "react";
import {
	Upload,
	Icon,
	message,
	Layout,
	Row,
	Col,
	Input,
	Select,
	Form,
	Button
} from "antd";
const Dragger = Upload.Dragger;
const { Header } = Layout;
const Option = Select.Option;
const FormItem = Form.Item;
const { TextArea } = Input;
import { Link } from "react-router-dom";
import style from "./index.less";

import BHeader from "../../components/BHeader";

const props = {
	name: "file",
	multiple: true,
	action: "//jsonplaceholder.typicode.com/posts/",
	onChange(info) {
		const status = info.file.status;
		if (status !== "uploading") {
			console.log(info.file, info.fileList);
		}
		if (status === "done") {
			message.success(`${info.file.name} file uploaded successfully.`);
		} else if (status === "error") {
			message.error(`${info.file.name} file upload failed.`);
		}
	}
};


class UploadView extends Component {

	handleSubmit=(e)=>{
		e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
	}

	render() {
		let { getFieldDecorator } = this.props.form;
		return (
			<Layout style={{ height: "100%" }}>
				<Layout style={{ padding: "20px 50px" }}>
					<h2 className={style.title}>文件上传</h2>
					<Form onSubmit={this.handleSubmit}>
						<FormItem>
							{getFieldDecorator("title", {
								rules: [{ required: true, message: "请输入标题" }]
							})(<Input placeholder="标题" size="large" />)}
						</FormItem>
						<Row>
							<Col span={4}>
								<FormItem>
									{getFieldDecorator("category", {
										rules: [{ required: true, message: "请选择分类" }]
									})(
										<Select placeholder="分类" size="large">
											<Option key="1" value="1">
												AAA
											</Option>
										</Select>
									)}
								</FormItem>
							</Col>
							<Col span={20}>
								<FormItem>
									{getFieldDecorator("tags", {
										rules: [{ required: true, message: "请选标签" }]
									})(
										<Select placeholder="标签" size="large">
											<Option key="1" value="1">
												AAA
											</Option>
										</Select>
									)}
								</FormItem>
							</Col>
						</Row>
						<FormItem>
							{getFieldDecorator("desc")(
								<TextArea
									placeholder="简述"
									size="large"
									style={{ height: "150px" }}
								/>
							)}
						</FormItem>
						<Row>
							<Col span={24}>
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
												Support for a single or bulk upload. Strictly prohibit
												from uploading company data or other band files
											</p>
										</div>
									</div>
								</Dragger>
							</Col>
						</Row>
						<Row type="flex" justify="right" style={{paddingTop: '20px'}}>
							<Col style={{textAlign: 'right'}} span={24}>
								<Button type="primary" htmlType="submit" size="large">
									文件上传
								</Button>
							</Col>
						</Row>
					</Form>
					{/* <div>
						<h3 className={style.title}>文档上传</h3>		
					</div>
					 */}
				</Layout>
			</Layout>
		);
	}
}

export default Form.create()(UploadView);
