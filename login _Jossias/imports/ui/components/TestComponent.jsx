import React from 'react';
import { RegisterUser } from '../../api/accounts/methods.js';

export default class TestComponent extends React.Component {
  addData() {
    RegisterUser.call({
      username:"Hybrid117",
      firstName:"josias",
      lastName:"ruegg",
      birthdate: new Date(),
      email: "josiasruegg@gmail.com",
      password: "tester123",
     }, (error, result) => {
       if (error) {
         alert(error);
       } else {
         alert("No errors");
       }});
  }


  render() {
    return(
      <div>
        <button onClick={this.addData}> Click to add data </button>
      </div>
    );
  }
}
