import React, { SyntheticEvent } from "react";
import { Form, Button, Row, } from "react-bootstrap";
import userHelper from '../helpers/usersHelper';
import allUsersStore from '../stores/UserStore';


interface inputsStates {
  usernameInputValue: string,
  emailInputValue: string,
  passwordInputValue: string
}

export default class RegistrationForm extends React.Component<inputsStates> {
  state: inputsStates = { usernameInputValue: '', emailInputValue: '', passwordInputValue: ''}

  private _usernameChange = (event: SyntheticEvent) => {
    this.setState({
      usernameInputValue: (event.target as HTMLInputElement).value
    });
}

private _emailChange = (event: SyntheticEvent) => {
  this.setState({
    emailInputValue: (event.target as HTMLInputElement).value
  });
}

private _passwordChange = (event: SyntheticEvent) => {
  this.setState({
    passwordInputValue: (event.target as HTMLInputElement).value
  });
}

private _loginButtonAction = (event: SyntheticEvent) => {
  event.preventDefault();

  let emailValid = userHelper.checkEmail(this.state.emailInputValue)
  let passwordValid = userHelper.checkPasswordStrength(this.state.passwordInputValue)
  let checkResult = userHelper.checkUser(allUsersStore.getUserList(), this.state.usernameInputValue, this.state.emailInputValue, this.state.passwordInputValue)
  console.log(emailValid, passwordValid, checkResult)
}

  render() {
    return ( <Row className="justify-content-md-center mt-5">
      <Form>
        <Form.Group>        
          <Form.Label htmlFor="email">იმეილი</Form.Label>
          <Form.Control type="text" name="email" value={this.state.emailInputValue} onChange={(e) => this._emailChange (e)}/>      
       </Form.Group>
       <Form.Group>
          <Form.Label htmlFor="username">სახელი</Form.Label>
          <Form.Control type="text" name="username" value={this.state.usernameInputValue} onChange={(e) => this._usernameChange (e)}/>
        </Form.Group>
        <Form.Group> 
          <Form.Label htmlFor="password">პაროლი</Form.Label>
          <Form.Control type="text" name="password" value={this.state.passwordInputValue} onChange={(e) => this._passwordChange (e)}/>
        </Form.Group> 
        {/* {this.state.error ? <div>{this.state.error}</div> : undefined} */}
        <div className="submit">
          <Button onClick={(e) => this._loginButtonAction (e)}> შესვლა</Button>
        </div>
      </Form>
      </Row>
    )
  }
}