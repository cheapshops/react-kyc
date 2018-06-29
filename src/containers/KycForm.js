import React, { Component } from 'react';
import { Steps, Button, message } from 'antd';

import CompanyInformation from '../components/CompanyInformation';
import PersonalInformation from '../components/PersonalInformation';
import Review from '../components/Review';

const Step = Steps.Step;

const steps = [{
  title: 'Personal Information',
  content: <PersonalInformation/>,
}, {
  title: 'Company Information',
  content: <CompanyInformation/>,
}, {
  title: 'Review',
  content: <Review/>,
}];

class KycForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
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
  render() {
    const { current } = this.state;
    return (
      <div>
        <h1>KYC</h1>
        <div>
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div style={{marginTop:"50px"}} className="steps-content">{steps[current].content}</div>
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
