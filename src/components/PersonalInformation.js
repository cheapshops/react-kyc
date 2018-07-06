import React, { Component } from 'react';
import { Input, Row, Col } from 'antd';

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

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  render() {

    return (
      <div>
        <Row className="formRow">
          <Col offset={6} span={6}>Primary contact email</Col>
          <Col span={6}>
            <Input
              value={this.props.data.email}
              onChange={(e)=>{
                this.props.updateField('email', e.target.value)
              }}
              style={{ borderColor: this.props.invalidFieldsList.indexOf('email') !== -1 ? 'red' :""}}
            />
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>Full legal name</Col>
          <Col span={6}>
            <Input
              value={this.props.data.name}
              onChange={(e)=>{
                this.props.updateField('name', e.target.value)
              }}
              style={{ borderColor: this.props.invalidFieldsList.indexOf('name') !== -1 ? 'red' :""}}
            />
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>Date of birth</Col>
          <Col span={6}>
            <Input
              value={this.props.data.dateofbirth}
              onChange={(e)=>{
                this.props.updateField('dateofbirth', e.target.value)
              }}
              style={{ borderColor: this.props.invalidFieldsList.indexOf('dateofbirth') !== -1 ? 'red' :""}}
            />
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>Address Line 1</Col>
          <Col span={6}>
            <Input
              value={this.props.data.address_line1}
              onChange={(e)=>{
                this.props.updateField('address_line1', e.target.value)
              }}
              style={{ borderColor: this.props.invalidFieldsList.indexOf('address_line1') !== -1 ? 'red' :""}}
            />
          </Col>
        </Row>

        <Row className="formRow">
          <Col offset={6} span={6}>Address Line 2</Col>
          <Col span={6}>
            <Input
              value={this.props.data.address_line2}
              onChange={(e)=>{
                this.props.updateField('address_line2', e.target.value)
              }}
              style={{ borderColor: this.props.invalidFieldsList.indexOf('address_line2') !== -1 ? 'red' :""}}
            />
          </Col>
        </Row>

        <Row className="formRow">
          <Col offset={6} span={6}>Address City</Col>
          <Col span={6}>
            <Input
              value={this.props.data.address_city}
              onChange={(e)=>{
                this.props.updateField('address_city', e.target.value)
              }}
              style={{ borderColor: this.props.invalidFieldsList.indexOf('address_city') !== -1 ? 'red' :""}}
            />
          </Col>
        </Row>

        <Row className="formRow">
          <Col offset={6} span={6}>Zip</Col>
          <Col span={6}>
            <Input
              value={this.props.data.address_zip}
              onChange={(e)=>{
                this.props.updateField('address_zip', e.target.value)
              }}
              style={{ borderColor: this.props.invalidFieldsList.indexOf('address_zip') !== -1 ? 'red' :""}}
            />
          </Col>
        </Row>

        <Row className="formRow">
          <Col offset={6} span={6}>Country</Col>
          <Col span={6}>
            <Input
              value={this.props.data.address_country}
              onChange={(e)=>{
                this.props.updateField('address_country', e.target.value)
              }}
              style={{ borderColor: this.props.invalidFieldsList.indexOf('address_country') !== -1 ? 'red' :""}}
            />
          </Col>
        </Row>

        <Row className="formRow">
          <Col offset={6} span={6}>Social Security Number (for US) or Social Insurance Number (for Canada)</Col>
          <Col span={6}>
            <Input
              value={this.props.data.ssn}
              onChange={(e)=>{
                this.props.updateField('ssn', e.target.value)
              }}
              style={{ borderColor: this.props.invalidFieldsList.indexOf('ssn') !== -1 ? 'red' :""}}
            />
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>State/Federally Issued ID or Driver’s License (Document Upload)</Col>
          <Col span={6}>
            <input
              type="file"
              onChange={(e) => {
                let T = this
                let data_pic_issued_id = e.target.files[0]
                this.getBase64(e.target.files[0], (imageUrl) => {
                  data_pic_issued_id.base64 = imageUrl
                  T.props.updateField('pic_issued_id', data_pic_issued_id)
                })
              }}
            />
          </Col>
        </Row>
      </div>

    );
  }
}
export default PersonalInformation;