import { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Button, Nav} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Context1 } from '../App';

function Detail(props) { 
    /*
    // useContext(받은 것) 알아서 풀어서 사용
    let a = useContext(Context1);  // <- 받는 법
    console.log(a);
    console.log(a.stock);
    */

    let {stock, clothes} = useContext(Context1);  //객체분해할당해서
    console.log(stock);
    console.log(clothes);

    let {pindex} = useParams();     
   
    /*
    let findId = props.clothes.find(function(v) {
        return v.id == pid;  고유아이디 지정해서 쓰기!
    })
    */

    let[alert, setAlert] = useState(true);

    let[tab, setTab] = useState(0);

    useEffect(() => {
       setTimeout(() => {setAlert(false)}, 3000);
    },)  //  [] 업데이트 될 때마다 호출 -> 넣지않기

    let [detailfade, setDetailFade] = useState('start');

    useEffect(() => {
         setDetailFade('end')
      
    },[])   //tab이 재랜더링 될 때마다


    return(
        <div className={detailfade}> 
            {
                alert ? <div> <h2>3초 이내에 구매시 30% 할인</h2></div> : null
            }
        <Container>
      <Row>
        <Col sm={7}>
            <img src={`${process.env.PUBLIC_URL}/img/qwe${pindex}.jpg`}  width="80%" />
        </Col>
        <Col sm={5}>
            <h4>{props.clothes[pindex-1].title}</h4>
            <p>{props.clothes[pindex-1].content}</p>
            <p>{props.clothes[pindex-1].price}원</p>
            <Button variant="outline-secondary">주문하기</Button>
        </Col>
      </Row>
      </Container>

    <Nav variant="tabs" defaultActiveKey="link-0">
      <Nav.Item>
        <Nav.Link onClick={() => {setTab(0)}} eventKey="link-0">상세보기</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => {setTab(1)}} eventKey="link-1">사이즈</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => {setTab(2)}} eventKey="link-2">리뷰</Nav.Link>
      </Nav.Item>
    </Nav>
    
    { /* 1. 삼항연산자 
    {tab == 0 ? <div>하늘색 원피스</div>  : tab == 1 ? <div>95,100 size</div> : <div>예뻐요</div> } */ }
                    {/* if ? 값 : ifelse 값 : else 값 */}
      {/* if문 담아놓음 */}              
    <TabContent tab = {tab} />
        </div>  
    )
}


function TabContent({tab}) {
    let [fade, setFade] = useState('');

    let {stock} = useContext(Context1); // 재 랜더링 해야 함 잘사용X
    console.log(stock);

    // react 18 버전부터 automatic batching 기능
    // state함수가 근처에 있으면 합쳐서 한꺼번에 state를 변경
    useEffect(() => {
        setTimeout(() => { setFade('end')}, 100);
        return () => {    //리턴이 있으면 리턴먼저 실행되고 위에 실행됨 위에 시간차를 줘야 함
            setFade('start');
        }
    },[tab])   //tab이 재랜더링 될 때마다

    return (
        <div  className={fade}>
            { [<div>{stock}</div> ,<div>{stock[1]}</div>, <div>예뻐요</div>][tab]}
        </div>    
    )
}

/*  // 2. if문으로
if(tab == 0) {
    return <div className='start'>하늘색 원피스</div> 
} else if(tab == 1) {
    return <div>95,100 size</div>
} else {
    return <div>예뻐요</div>
    }
*/

// 3. 배열로
//let tabArr = [<div>하늘색 원피스</div> ,<div>95,100 size</div>, <div>예뻐요</div> ]
//return tabArr[tab];

/*4. 한줄로
return [<div>하늘색 원피스</div> ,<div>95,100 size</div>, <div>예뻐요</div>][tab]
*/

export default Detail;