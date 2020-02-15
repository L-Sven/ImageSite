import React from "react";
import { connect } from "react-redux";
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  FormGroup,
  Form,
  Row,
  Col,
  Input,
  Label,
  Button
} from "reactstrap";

import { userActions } from "../../redux/actions/Auth.Actions";

import "./Auth.scss";

interface KeyEventInfo {
  key: string;
  keyCode: number;
  type: string;
  ctrlKey: boolean;
}

const Signin = (props: any) => {
  document.title = "Login";
  const login = (): void => {
    props.login("test", "testpassword");
  };

  const keyPressed = (e: KeyEventInfo) => {
    switch (e.key) {
      case "Enter":
        login();
        break;
    }
  };

  return (
    <div className="signin-container">
      <Card className="signin-body" onKeyDown={keyPressed}>
        <CardBody>
          <CardTitle className="signin-title">Login</CardTitle>
          <CardText>Please login with your email and password!</CardText>
        </CardBody>
        <Form>
          <Row form>
            <Col md={12}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  autoFocus
                  type="email"
                  name="email"
                  id="email"
                  placeholder="yourname@mail.com"
                />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="************"
                />
              </FormGroup>
            </Col>
          </Row>
          <Button onClick={() => login()}>Sign in</Button>
        </Form>
      </Card>
    </div>
  );
};

function mapState(state: any) {
  const auth = state.authReducer;
  return auth;
}

const actionCreator = {
  login: userActions.login
};

export default connect(mapState, actionCreator)(Signin);
