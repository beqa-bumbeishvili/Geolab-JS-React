import React, { SyntheticEvent } from "react";
import { Form, Button, Row, } from "react-bootstrap";
import userHelper from '../helpers/usersHelper';
import alertsHelper from '../helpers/alertsHelper';
import allUsersStore from '../stores/UserStore';
import User from '../classes/User';
import { Redirect } from 'react-router-dom';


interface LoginState {
  usernameInputValue: string,
  emailInputValue: string,
  passwordInputValue: string,
  successfullLogin: boolean
}

export default class RegistrationForm extends React.Component<LoginState> {
  state: LoginState = { usernameInputValue: '', emailInputValue: '', passwordInputValue: '', successfullLogin: false }

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

    let fieldIsEmpty = userHelper.checkField(this.state.usernameInputValue, this.state.emailInputValue, this.state.passwordInputValue);
    let usernameFound = userHelper.checkUsername(allUsersStore.getUserList(), this.state.usernameInputValue);
    let emailValid = userHelper.checkEmail(this.state.emailInputValue)
    let passwordValid = userHelper.checkPasswordStrength(this.state.passwordInputValue)
    let userCheckResult = userHelper.checkUser(allUsersStore.getUserList(), this.state.usernameInputValue, this.state.emailInputValue, this.state.passwordInputValue)

    let loginResult = this._getLoginMessage(fieldIsEmpty, usernameFound, emailValid, userCheckResult, passwordValid);

    alert(loginResult.message);

    this._setLoginState(loginResult.successfullLogin);
  }

  private _setLoginState = (signed: boolean) => {
    this.setState({
      successfullLogin: signed
    });
  }

  private _getLoginMessage(fieldIsEmpty: boolean, usernameFound: User | undefined, isCorrectEmail: boolean, userFound: User | undefined, passwordIsStrong: boolean) {
    let message;
    let successFullLogin = false;

    if (fieldIsEmpty) { message = alertsHelper.fillInputErrosMessage(); }
    else if (!usernameFound) { message = alertsHelper.userNotFoundErrorMessage(); }
    else if (!isCorrectEmail) { message = alertsHelper.incorrectEmailFormat(); }
    else if (!userFound) { message = alertsHelper.incorrectEmailOrPassword(); }
    else if (!passwordIsStrong) {
      message = alertsHelper.succsessLoginAlertMessage();
      successFullLogin = true;
    }
    else {
      message = alertsHelper.successLoginMessage();
      successFullLogin = true;
    }

    return {
      message: message,
      successfullLogin: successFullLogin
    };
  }

  render() {
    if (this.state.successfullLogin) {
      return <Redirect to='/' />;
    }

    return (
    <Row className="justify-content-md-center mt-5">
      <Form>
        <Form.Group>
          <Form.Label htmlFor="username">სახელი</Form.Label>
          <Form.Control type="text" name="username" value={this.state.usernameInputValue} onChange={(e) => this._usernameChange(e)} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">იმეილი</Form.Label>
          <Form.Control type="text" name="email" value={this.state.emailInputValue} onChange={(e) => this._emailChange(e)} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">პაროლი</Form.Label>
          <Form.Control type="text" name="password" value={this.state.passwordInputValue} onChange={(e) => this._passwordChange(e)} />
        </Form.Group>
        <div className="submit">
          <Button onClick={(e) => this._loginButtonAction(e)}> შესვლა</Button>
        </div>
      </Form>
    </Row>
    )
  }
}