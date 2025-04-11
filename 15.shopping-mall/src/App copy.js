import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Container, Nav, Row, Col, Button } from 'react-bootstrap';
import qwe1 from './img/qwe1.jpg'
import { createContext, useState } from 'react';
// import {num1, num2} from './data/ProductList'
import pList from './data/ProductList';   //js는 안써줘도 됨
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import axios  from 'axios';

/*
   * SPA 의 단점
    - 컴포넌트간의 STATE공유  어려움

  * 공유저장 공간 사용
      1. Context Api : 기본 탑재되어 있음
        - 잘 안쓰는 이유 : 성능이슈(하나만 변해도 하위의 모든것들을 재랜더링)
                        재사용이 어렵다
      2. Redux : 외부 라이브러리
                  주로 사용
*/

export let Context1 = createContext();  //만들고 바로 내보내기 한것(문법/법칙)

function App() {
  const [clothes, setClothes] = useState(pList);  
  const [bCount, setbCount] = useState(2); 
 
  let navigate = useNavigate();

  // 재고변경
  let [stock, setStock] = useState([5,10,7]);  // 각각의 재고 개수를 배열로(3개씩 보이니까)


  return (
    <div className="App">

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">쇼핑몰🎀</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>    {/* 클릭하면 /루트로 route와 연결 */}
            <Nav.Link onClick={() => {navigate('/cart')}}>Cart</Nav.Link>  {/* 클릭하면 /cart로 */}
            <Nav.Link onClick={() => {navigate('/about')}}>about</Nav.Link>  
           {/* <Nav.Link onClick={() => {navigate(1)('/cart')}}>Cart</Nav.Link>  (1)한페이지 앞으로 
            <Nav.Link onClick={() => {navigate(-1)('/cart')}}>Cart</Nav.Link>  (1)한페이지 뒤로 */}
          </Nav>
        </Container>
      </Navbar>

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

    <Button variant="outline-secondary" onClick={() => {
      axios.get(`https://raw.githubusercontent.com/professorjiwon/data/refs/heads/main/data${bCount}.json`)      // url 
          .then((result) => {   //성공 시
            console.log(result);
            console.log(result.data);   // data(값)만 들어옴
            setClothes([...clothes, ...result.data]);
            setbCount(bCount+1);  //useState넣어주고 / 한번 2 하고 그다음부터 +1 해주기
          })      
          .catch(() => {       //실패 시
            console.log('데이터 가져오기 실패');
            alert('데이터가 없습니다');
          })     
    }}>  서버에서 데이터 가져오기  </Button>

        </>
      } />    
        <Route path='/detail/:pindex' element={
          <Context1.Provider value={{stock, clothes}}>   {/* 공유저장공간에 값을 넘겨준 것 2개이상 가능 */}
          <Detail clothes={clothes}/>
          </Context1.Provider>
          } />      
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<div>쇼핑몰소개란</div>} />
        <Route path='*' element={<div>없는 페이지 입니다</div>} />
      </Routes>      
    </div>
  );
}

function PlistCol(props) {  //{colthes} 로 하면 props빼고
  const navigate = useNavigate();

  const goDetail = () => {
    navigate('/detail/' + props.clothes.id);
  }
  return(
    <>
      <Col md={4} onClick={goDetail}>
          <img src={process.env.PUBLIC_URL + `/img/qwe${props.clothes.id}.jpg`} width="70%" />
          <h4>{props.clothes.title}</h4>
          <p>{props.clothes.price}</p>
        </Col>
    </>
  )
}


export default App;
