import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

// import { Row, Col } from 'antd';



const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class PersonalInformation extends Component {

  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render() {

    console.log('----b')
    console.log( this.props.data)

    return (
      <div>
        <Row className="formRow">
          <Col offset={6} span={6}>Primary contact email</Col>
          <Col span={6}>
            <Input
              placeholder="default size"
              value={this.props.data.email}
              onChange={(e)=>{
                this.props.updateField('email', e.target.value)
              }}
            />
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>Full legal name</Col>
          <Col span={6}>
            <Input
              placeholder="default size"
              value={this.props.data.name}
              onChange={(e)=>{
                this.props.updateField('name', e.target.value)
              }}
            />
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>Date of birth</Col>
          <Col span={6}>
            <Input
              placeholder="default size"
              value={this.props.data.dateofbirth}
              onChange={(e)=>{
                this.props.updateField('dateofbirth', e.target.value)
              }}
            />
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>Address (US or Canadian)</Col>
          <Col span={6}>
            <Input
              placeholder="default size"
              value={this.props.data.address}
              onChange={(e)=>{
                this.props.updateField('address', e.target.value)
              }}
            />
          </Col>
          </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>Social Security Number (for US) or Social Insurance Number (for Canada)</Col>
          <Col span={6}>
            <Input
              placeholder="default size"
              value={this.props.data.ssn}
              onChange={(e)=>{
                this.props.updateField('ssn', e.target.value)
              }}
            />
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>State/Federally Issued ID or Driver’s License (Document Upload)</Col>
          <Col span={6}>
            <Input
              placeholder="default size"
              value={this.props.data.issued_id}
              onChange={(e)=>{
                this.props.updateField('issued_id', e.target.value)
              }}
            />
          </Col>
        </Row>
      </div>

    );
  }
}
export default PersonalInformation;
