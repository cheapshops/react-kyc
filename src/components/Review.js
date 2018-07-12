import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Review extends Component {

  _render_pic_issued_id( file ){
    if( file && file.base64 ){
      return <img src={file.base64} alt=""  style={{height:'50px'}}/>
    }
  }
  _render_doc_irs_letter( file ){
    if( file && file.name ){
      return <span>{file.name}</span>
    }
  }
   _render_doc_article_of_incorporation( file ){
    if( file && file.name ){
      return <span>{file.name}</span>
    }
  }

  render() {
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
          <Col offset={6} span={6}>Address Line 1</Col>
          <Col span={6}>
            {this.props.data.address_line1}
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>Address Line 2</Col>
          <Col span={6}>
            {this.props.data.address_line2}
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>City</Col>
          <Col span={6}>
            {this.props.data.address_city}
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>Zip</Col>
          <Col span={6}>
            {this.props.data.address_zip}
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>Country</Col>
          <Col span={6}>
            {this.props.data.address_country}
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
            { this._render_pic_issued_id( this.props.data.pic_issued_id )}
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
            { this._render_doc_article_of_incorporation( this.props.data.doc_article_of_incorporation )}
          </Col>
        </Row>
        <Row className="formRow">
          <Col offset={6} span={6}>IRS Letter showing proof of EIN (Document Upload)</Col>
          <Col span={6}>
            { this._render_doc_irs_letter( this.props.data.doc_irs_letter )}
          </Col>
        </Row>
      </div>

    );
  }
}
export default Review;
