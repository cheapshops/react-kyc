import React, { Component } from 'react';
import  {Input, Row, Col } from 'antd';

class CompanyInformation extends Component {

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

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }



  render() {
    return (
      <div>
        <Row className="formRow">
          <Col offset={6} span={6}>Legal business name</Col>
          <Col span={6}>
            <Input
              value={this.props.data.business_name}
              onChange={(e)=>{
                this.props.updateField('business_name', e.target.value)
              }}
            />
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>Physical business address</Col>
          <Col span={6}>
            <Input
              value={this.props.data.business_address}
              onChange={(e)=>{
                this.props.updateField('business_address', e.target.value)
              }}
            />
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>Business phone number</Col>
          <Col span={6}>
            <Input
              value={this.props.data.business_phone_number}
              onChange={(e)=>{
                this.props.updateField('business_phone_number', e.target.value)
              }}
              style={{ borderColor: this.props.invalidFieldsList.indexOf('business_phone_number') !== -1 ? 'red' :""}}
            />
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>Tax ID number</Col>
          <Col span={6}>
            <Input
              value={this.props.data.tax_id_number}
              onChange={(e)=>{
                this.props.updateField('tax_id_number', e.target.value)
              }}
            />
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>Business descriptions</Col>
          <Col span={6}>
            <Input
              value={this.props.data.business_descriptions}
              onChange={(e)=>{
                this.props.updateField('business_descriptions', e.target.value)
              }}
            />
          </Col>
        </Row>
         <Row className="formRow">
          <Col offset={6} span={6}>Articles of Incorporation (Document Upload)</Col>
          <Col span={6}>
            <div>
              <input
                type="file"
                onChange={(e) => {
                  let T = this
                  let dataFile = e.target.files[0]
                  this.getBase64(e.target.files[0], (imageUrl) => {
                    dataFile.base64 = imageUrl
                    T.props.updateField('doc_article_of_incorporation', dataFile)
                  })
                }}
              />
            </div>
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>IRS Letter showing proof of EIN (Document Upload)</Col>
          <Col span={6}>
            <div>
              <input
                type="file"
                onChange={(e) => {
                  let T = this
                  let dataFile = e.target.files[0]
                  this.getBase64(e.target.files[0], (imageUrl) => {
                    dataFile.base64 = imageUrl
                    T.props.updateField('doc_irs_letter', dataFile)
                  })
                }}
              />
            </div>
          </Col>
        </Row>
      </div>

    );
  }
}
export default CompanyInformation;
