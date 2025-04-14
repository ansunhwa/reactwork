import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Nav} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addItem } from '../store/store';



function Detail(props) { 
    //1. localStorage 가져오기
    //2. 배열로 변경
    //3. 배열에 넣기
    //4. localStorage 넣기

    useEffect(() => {
        let p = localStorage.getItem('recentProduct')
            p = JSON.parse(p)

            if(!p.includes(findId.id)) {
            p.push(findId.id)
            localStorage.setItem('recentProduct', JSON.stringify(p))
        }
    },[])

    let dispatch = useDispatch();
    const nav = useNavigate();

    let {pid} = useParams();
    let findId = props.clothes.find((v) => v.id == pid)

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
            <img src={`${process.env.PUBLIC_URL}/img/qwe${findId.id}.jpg`}  width="80%" />
        </Col>
        <Col sm={5}>
                    <h4>{findId.title}</h4>
                    <p>{findId.content}</p>
                    <p>{findId.price}원</p>
            <Button variant="outline-secondary" onClick={() => {
                dispatch(addItem({id:findId.id, name:findId.title,  count:1}))
                nav('/cart')
            }}>주문하기</Button>
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
    <TabContent tab = {tab} />
    <RecentViewed clothes={props.clothes} />
        </div>  
    )
}

function RecentViewed({clothes}) {
    const [recent, setRecent] = useState([]);
    useEffect(() => {
        let viewed = JSON.parse(localStorage.getItem('recentProduct')) || []
                                                 //|| 왼쪽실행   && 오른쪽 실행
        let products =  viewed.map(id => clothes.find(c => c.id == id))

        setRecent(products);
    },[clothes])    //clothes가 변할 때 마다
    
    return (
        <div>
            <h4>최근 본 상품</h4>
            <table>
                <tr>
                    <th>이름 : </th>
                    <th>가격 : </th>
                </tr>
                {
                    recent.map((item) => 
                        <tr>
                            <td>{item.title}</td>
                            <td>{item.price}원</td>
                        </tr>
                    )
                }
            </table>
        </div>
    )
                                         

}


function TabContent({tab}) {
    let [fade, setFade] = useState('');

    useEffect(() => {
        setTimeout(() => { setFade('end')}, 100);
        return () => {    //리턴이 있으면 리턴먼저 실행되고 위에 실행됨 위에 시간차를 줘야 함
            setFade('start');
        }
    },[tab])   //tab이 재랜더링 될 때마다

    return (
        <div  className={fade}>
            { [<div>옷정보 </div> ,<div>옷사이즈</div>, <div>예뻐요</div>][tab]}
        </div>    
    )
}



export default Detail;