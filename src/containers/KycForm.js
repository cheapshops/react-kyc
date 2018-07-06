import React, { Component } from 'react';
import { Steps, Button, message } from 'antd';

import CompanyInformation from '../components/CompanyInformation';
import PersonalInformation from '../components/PersonalInformation';
import Review from '../components/Review';

const Step = Steps.Step;

const steps = [{
  title: 'Personal Information',
  // content: <PersonalInformation/>,
}, {
  title: 'Company Information',
  // content: <CompanyInformation/>,
}, {
  title: 'Review',
  // content: <Review/>,
}];

class KycForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      formData: {
        email: "",
        name: "",
        dateofbirth:"",
        address_line1:"",
        address_line2:"",
        address_city:"",
        address_zip:"",
        address_country:"",
        ssn:"",
        pic_issued_id:"",
        business_name:"",
        business_address:"",
        business_phone_number:"",
        tax_id_number:"",
        business_descriptions:"",
        doc_article_of_incorporation:"",
        doc_irs_letter:""
      },
      invalidFieldsList: []
    };
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  isValidEmail =  (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  _validateFieldValue = ( field, value ) => {
    let isValid = null;
    if( field === 'email' ){
      isValid = this.isValidEmail( value )
    }
    if( field === 'name' ){
      let Regex= /^[a-zA-Z ]*$/;
      isValid = Regex.test(value)
    }
    if( field === 'dateofbirth' ){
      let reGoodDate = /^(?:(0[1-9]|1[012])[\-.](0[1-9]|[12][0-9]|3[01])[\-.](19|20)[0-9]{2})$/;
      return reGoodDate.test(value);
    }
    if( field === 'ssn' ){
      let ssnPattern = /^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/;
      return ssnPattern.test(value);
    }
    if( field === 'business_phone_number' ){
      let ssnPattern = /^[0-9]{1}\-?[0-9]{3}\-?[0-9]{3}\-?[0-9]{4}$/;
      return ssnPattern.test(value);
    }
    return isValid;
  }

  _updateFormField = ( field, newValue ) => {
    let invalidFieldsList = this.state.invalidFieldsList
    let existingFormData = this.state.formData;
    existingFormData[field] = newValue;

    let validate = this._validateFieldValue( field, newValue )
    if( validate === false ){
      if( invalidFieldsList.indexOf(field) === -1 ){
        invalidFieldsList.push(field)
      }
    } else if( validate === true ){
      if( invalidFieldsList.indexOf(field) !== -1 ){
        let index = invalidFieldsList.indexOf(field);
        if (index > -1) {
          invalidFieldsList.splice(index, 1);
        }
      }
    } else {

    }

    this.setState({
      formData: existingFormData,
      invalidFieldsList: invalidFieldsList
    })
  }

  render() {
    const { current, invalidFieldsList } = this.state;
    return (
      <div>
        <h1 style={{textAlign:'center'}}>KYC</h1>
        <div>
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div style={{marginTop:"50px"}} className="steps-content">
          {
            current === 0 && <PersonalInformation updateField={this._updateFormField} data={this.state.formData} invalidFieldsList={invalidFieldsList}/>
          }
          {
            current === 1 && <CompanyInformation updateField={this._updateFormField} data={this.state.formData} invalidFieldsList={invalidFieldsList}/>
          }
          {
            current === 2 && <Review data={this.state.formData} invalidFieldsList={invalidFieldsList}/>
          }
        </div>
        <div className="steps-action">
          {
            current < steps.length - 1
            && <Button type="primary" onClick={() => this.next()}>Next</Button>
          }
          {
            current === steps.length - 1
            && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
          }
          {
            current > 0
            && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
            )
          }
        </div>
      </div>
      </div>
    );
  }
}

export default KycForm;
