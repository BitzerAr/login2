import React from 'react';
import { RegisterUser } from '../../api/accounts/methods.js';

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamerTag:"",
      firstName:"",
      lastName:"",
      birthdate: 0,
      email:"",
      password:"",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    //event.preventDefault();

    RegisterUser.call({
      username:this.state.gamerTag,
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      birthdate: new Date(),
      email: this.state.email,
      password:this.state.email,
     }, (error, result) => {
       if (error) {
         alert(error);
       } else {
         alert("No errors");
       }});

      return false;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange} required>

        <input type='text'     name='gamerTag'  placeholder='Enter your Gamertag' value={this.state.gamerTag} required/>
        <input type='text'     name='firstName' placeholder='First name' value={this.state.firstName} required/>
        <input type='text'     name='lastName'  placeholder='Last name' value={this.state.lastName} required/>
        <label>
          Birthdate <input type='date'     name='birthdate' value={this.state.birthdate} required/>
        </label>
        <input type='email'    name='email'     placeholder='Your email' value={this.state.email} required/>
        <input type='password' name='password'  placeholder='New Password' value={this.state.password} required/>


        <input type="submit" value="Submit"/>
      </form>

    );
  }
}
