import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import qwe1 from './img/qwe1.jpg'
import { useState } from 'react';
// import {num1, num2} from './data/ProductList'
import pList from './data/ProductList';   //js는 안써줘도 됨
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
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
  /*
    * useNavigate() :페이지의 이동을 도와주는 함수(hook)
  */

  let navigate = useNavigate();
  return (
    <div className="App">

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">쇼핑몰🎀</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>    {/* 클릭하면 /루트로 route와 연결 */}
            <Nav.Link onClick={() => {navigate('/detail')}}>Detail</Nav.Link>  
            <Nav.Link onClick={() => {navigate('/cart')}}>Cart</Nav.Link>  {/* 클릭하면 /cart로 */}
            <Nav.Link onClick={() => {navigate('/about')}}>about</Nav.Link>  
           {/* <Nav.Link onClick={() => {navigate(1)('/cart')}}>Cart</Nav.Link>  (1)한페이지 앞으로 
            <Nav.Link onClick={() => {navigate(-1)('/cart')}}>Cart</Nav.Link>  (1)한페이지 뒤로 */}
          </Nav>
        </Container>
      </Navbar>

      {/* 
      <Link to='/'>Home</Link>   
      <Link to='/detail'>상세페이지</Link>   
      <Link to='/cart'>장바구니</Link>  
      */}

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
            {/* <Route /> 에서 페이지로 이동하는 거임 */}
        {/* <Route path='/detail' element={<Detail clothes={clothes[0]}/>} />  0만 받아 올 때 */}
        {/* <Route path='/detail/member/:pid' element={<Detail clothes={clothes}/>} />
                  detail/memger/user01  -> member : 문자, 하위폴더 

        <Route path='/detail/:pid/:name' element={<Detail clothes={clothes}/>} />
                 detail/:pid/:name  -> /: 받아올 수 있는 데이터가 여러개 */}

        <Route path='/detail/:pindex' element={<Detail clothes={clothes}/>} />      
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<div>쇼핑몰소개란</div>} />

        <Route path='*' element={<div>없는 페이지 입니다</div>} />
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
