import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import qwe1 from './img/qwe1.jpg'
import { useState } from 'react';
// import {num1, num2} from './data/ProductList'
import pList from './data/ProductList';   //js는 안써줘도 됨


function App() {
  const [clothes, setClothes] = useState(pList);   //내가 만든 list값이 들어감

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">쇼핑몰🎀</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      {/* background로 넣을 때 */}
        <div className="main-bg"  /> 
      
      {/* public/img 폴더에 저장했을 때 import필요없음
      <img src="/img/main.jpg"  />   */}
     

  <Container>
      <Row>
        <Col>
          {/* src 하위에 넣었을 때는 import하여 사용! */}
          <img src={qwe1} width="70%" />
          <h4>{clothes[0].title}</h4>
          <p>{clothes[0].price}</p>
        </Col>
        <Col>
        {/* public/img 폴더에 그림이 있을땐 import필요없음 */}
        <img src='/img/qwe2.jpg' width="70%" />
          <h4>{clothes[1].title}</h4>
          <p>{clothes[1].price}</p>
        </Col>
        <Col>
        {/* public/img 폴더에 그림이 있고 배포할 때 url을 얻어와서 앞에 넣어준다*/}
        {/* 배포시 tjouen.com 경로에 배포하면 이때는 상관없음.
            tjouen.com/img/...~ 하위경로일 때는 그림을 못찾음  */}
        <img src={process.env.PUBLIC_URL + '/img/qwe3.jpg'} width="70%" />
          <h4>{clothes[2].title}</h4>
          <p>{clothes[2].price}</p>
        </Col>
      </Row>
    </Container>
      
      
      
    </div>
  );
}

export default App;
