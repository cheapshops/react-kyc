import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

// import { Row, Col } from 'antd';



const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class Review extends Component {

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
            {this.props.data.email}
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>Full legal name</Col>
          <Col span={6}>
            {this.props.data.name}
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>Date of birth</Col>
          <Col span={6}>
            {this.props.data.dateofbirth}
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>Address</Col>
          <Col span={6}>
            {this.props.data.address_line1}
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>Social Security Number (for US) or Social Insurance Number (for Canada)</Col>
          <Col span={6}>
            {this.props.data.ssn}
          </Col>
        </Row>
         <Row className="formRow">
          <Col offset={6} span={6}>State/Federally Issued ID or Driver’s License (Document Upload)</Col>
          <Col span={6}>
            {this.props.data.issued_id}
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>Legal business name</Col>
          <Col span={6}>
            {this.props.data.business_name}
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>Physical business address</Col>
          <Col span={6}>
            {this.props.data.business_address}
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>Business phone number</Col>
          <Col span={6}>
            {this.props.data.business_phone_number}
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>Tax ID number</Col>
          <Col span={6}>
            {this.props.data.tax_id_number}
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>Business descriptions</Col>
          <Col span={6}>
            {this.props.data.business_descriptions}
          </Col>
        </Row>
         <Row className="formRow">
          <Col offset={6} span={6}>Articles of Incorporation (Document Upload)</Col>
          <Col span={6}>
            {this.props.data.article_of_incorporation}
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>IRS Letter showing proof of EIN (Document Upload)</Col>
          <Col span={6}>
            {this.props.data.irs_letter}
          </Col>
        </Row>
      </div>

    );
  }
}
export default Review;
