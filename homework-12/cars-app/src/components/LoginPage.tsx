import React from 'react';
import User from '../classes/User'
import UsersStore from '../stores/UserStore'
import { RouteComponentProps } from 'react-router-dom'
import { Form, Button, Row, } from "react-bootstrap";

class LoginPage extends React.Component {
    render() {
      return <Row className="justify-content-md-center mt-5">
      <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>სახელი</Form.Label>
      <Form.Control />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>მეილი</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>პაროლი</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        შესვლა
      </Button>
    </Form>
    </Row>;
    }
  }

  export default LoginPage;