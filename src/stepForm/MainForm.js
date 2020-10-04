import React, { Component } from 'react';
import UserDetails from './UserDetails';
import PersonalDetails from './OtherDetails';
import Success from './Success';

class MainForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        city: '',
        country: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }
    handleChange = (e) => {
        this.setState({ firstName: e })
    }
    customBadge = (step) => {
        const badgeStyle = {
            padding: '8px 10px',
            width: 30,
            height: 30,
            borderRadius: '50%',
            marginRight: 2
        }
        return (
            <div>
                <span style={badgeStyle} className="badge badge-primary">{(step === 2 || step === 3) ? <i className="fa fa-check"></i> : 1}</span>
                    User Details -----------
                <span style={badgeStyle} className={`badge ${(step === 2 || step === 3) ? 'badge-primary' : 'badge-secondary'}`}>{(step === 3) ? <i className="fa fa-check"></i> : 2}</span>
                    Other Details -----------
                <span style={badgeStyle} className={`badge ${(step === 3) ? 'badge-primary' : 'badge-secondary'}`}>3</span>
            </div>
        )
    }

    render() {
        const { step } = this.state;
        switch (step) {
            case 1:
                return (<div>
                    {this.customBadge(step)}
                    <UserDetails
                        nextStep={this.nextStep}
                        values={this.state}
                        handleChange={this.handleChange}
                    /></div>)
            case 2:
                return (<div>
                    {this.customBadge(step)}
                    <PersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                    /></div>)
            case 3:
                return (<div>
                    {this.customBadge(step)}
                    <Success />
                </div>)
            default:
                return <UserDetails
                    nextStep={this.nextStep}
                />
        }
    }
}

export default MainForm;