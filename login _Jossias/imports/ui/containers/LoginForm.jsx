import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
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
    event.preventDefault();

    Meteor.loginWithPassword(this.state.password, this.state.username, (error, result) => {
      if (error) {
        alert(error);
      } else {
        alert("No errors");
      }
    });
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <label>
          Username <input type='text' name='username' value={this.state.username} />
        </label>
        <label>
          Password <input type='password' name='password' value={this.state.password}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
