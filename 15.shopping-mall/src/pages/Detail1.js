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


    //숫자상태를저장하는hook 숫자들어오면 안하고 문자들어오면 alert
    //let[num, setNum] = useState('');
    //useEffect(() => {
    //    if(isNaN(num) == true) {  // 숫자만 true
    //        alert('숫자만 입력하세요');
    //    }
    //},[num])  //num이 변경되었을 때만

    return(
        <div>
            {/*<input onChange={(e) => {setNum(e.target.value)}}></input>*/}
            
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