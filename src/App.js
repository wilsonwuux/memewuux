import React from 'react';
import {Container,Col,Row} from 'react-bootstrap'
import Header from './Components/Header'
import Routes from './Routes/Routes'
const App= ()=> {
  return (
    <div className="App">
      <Row>
      <Col>
          <Container>
            <Header/>
          </Container>
      </Col>
      </Row>
      <Row>
        <Col></Col>
          <Col>
            <h1 className='text-center'>App Memes</h1>
          </Col>
        <Col></Col>
      </Row>
      <Row>
      <Col>
        <Routes />
      </Col>
      </Row>
    </div>
  );
}

export default App;
