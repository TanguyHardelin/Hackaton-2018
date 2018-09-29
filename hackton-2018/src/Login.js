import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Login extends React.Component{
  render(){
    return(
      <div>
         <Container style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <Form >
            <FormGroup>
            <Label for="exampleEmail" >Username</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="username" />
          </FormGroup> <FormGroup>
              <Label for="exampleEmail">Password</Label>
              <Input type="password" name="email" id="exampleEmail" placeholder="password" />
            </FormGroup>
          </Form>

         </Container>
        

        <Container >
          <Row>
            <Col xs="6">
              <Button block>Sign up</Button>
            </Col>
            <Col xs="6">
              <Button color="success" block>Sign in</Button>
            </Col>
          </Row>
        </Container>
      </div>
    )

  }
};// TEST

export default Login;
