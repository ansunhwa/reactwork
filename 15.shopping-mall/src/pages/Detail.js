import { useEffect, useState } from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
function Detail(props) { 
    let {pindex} = useParams();     // detail/1 이렇게 값을 받아올 때
   
    // let id = props.clothes[pindex].id;
    

    /*
    let findId = props.clothes.find(function(v) {
        return v.id == pindex;  고유아이디 지정해서 쓰기!
    })
    */

    let[alert, setAlert] = useState(true);

    useEffect(() => {
        setTimeout(() => {setAlert(false)}, 3000);
    },)  //  [] 업데이트 될 때마다 호출 -> 넣지않기

    return(
        <div>
            {
                alert ? <div> <h2>3초 이내에 구매시 30% 할인</h2></div> : null
            }
        <Container>
      <Row>
        <Col sm={8}>
            <img src={`${process.env.PUBLIC_URL}/img/qwe${pindex}.jpg`}  width="80%" />
        </Col>
        <Col sm={4}>
            <h4>{props.clothes[pindex-1].title}</h4>
            <p>{props.clothes[pindex-1].content}</p>
            <p>{props.clothes[pindex-1].price}원</p>
            <Button variant="outline-secondary">주문하기</Button>

        </Col>
      </Row>
      </Container>
        </div>
    )
}

export default Detail;