import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import qwe1 from './img/qwe1.jpg'
import { useState } from 'react';
// import {num1, num2} from './data/ProductList'
import pList from './data/ProductList';   //js는 안써줘도 됨
import { Link, Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import Cart from './pages/Cart';

/*
  * react-router-dom
     : 페이지를 교체시켜주는 api -> router-dom

  * 사용하려면
     1. 설치 : npm i react-router-dom
     2. index.js에 <BrowserRouter> 태그 넣어주기

*/

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

      {/* 메뉴바가 없으면 여기를 디자인 해주면 됨 */}
      <Link to='/'>Home</Link>   
      <Link to='/detail'>상세페이지</Link>   
      <Link to='/cart'>장바구니</Link>  

      <Routes>
        <Route  path='/' element={
          <>
      {/* background로 넣을 때 */}
        <div className="main-bg"  />       
  <Container>
      <Row>
        {
          clothes.map((v,i) => {
            return(
                <PlistCol clothes={v} key={i} />
            )
          })
        }    
      </Row>
    </Container>
        </>
      } />
        <Route  path='/detail' element={<Detail />} />  {/* 하나의 페이지를 의미 */}
        <Route  path='/cart' element={<Cart />} />
      </Routes>      
    </div>
  );
}

function PlistCol(props) {
  return(
    <>
      <Col>
          <img src={process.env.PUBLIC_URL + `/img/qwe${props.clothes.id}.jpg`} width="70%" />
          <h4>{props.clothes.title}</h4>
          <p>{props.clothes.price}</p>
        </Col>
    </>
  )
}


export default App;
