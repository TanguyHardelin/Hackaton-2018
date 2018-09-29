import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';

class LoginPage extends React.Component{
  render(){
    return(
        <div>
          <Container>
            <Button outline color="danger" block>Join with google</Button>{' '}
          </Container>

        </div>
    )

  }
};// TEST

export default LoginPage;
