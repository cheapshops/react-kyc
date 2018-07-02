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
        address:"",
        ssn:"",
        issued_id:"",
        business_name:"",
        business_address:"",
        business_phone_number:"",
        tax_id_number:"",
        business_descriptions:"",
        article_of_incorporation:"",
        irs_letter:""
      }
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

  _updateFormField = ( field, newValue ) => {
    let existingFormData = this.state.formData;
    existingFormData[field] =newValue;
    this.setState({
      formData: existingFormData
    })
  }

  render() {
    const { current } = this.state;
    return (
      <div>
        <h1 style={{textAlign:'center'}}>KYC</h1>
        <div>
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div style={{marginTop:"50px"}} className="steps-content">
          {
            current == 0 && <PersonalInformation updateField={this._updateFormField} data={this.state.formData}/>
          }
          {
            current == 1 && <CompanyInformation updateField={this._updateFormField} data={this.state.formData}/>
          }
          {
            current == 2 && <Review data={this.state.formData}/>
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
