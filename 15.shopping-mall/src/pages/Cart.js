import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {useSelector, useDispatch} from 'react-redux';
import { ageUpdate, changeName, changeName1 } from '../store/store';
/*
    * Redux 변경하기
      1. store.js에서 변경해주는 함수 만들고
      2. export
      3. dispatch()로 감싸서 사용
*/
function Cart() {
    // 원하는 것만 가져오기
    let user = useSelector((state) => state.user)
    console.log(user);

    let stock = useSelector((state) => state.stock)  //배열로 되어있음

    let cart = useSelector((state) => state.cart)

    let user1 = useSelector((state) => state.user1)

    //변경/ store.js에 요청을 보내주는 함수
    let dispatch = useDispatch()
  
    

    return(
        <div>
            {user}의 장바구니🛒 <br/>
            이름: {user1.name} <br />
            나이: {user1.age}<br/>
            <Button onClick={() => {dispatch(changeName1())}}>이름바꾸기</Button>
            <Button onClick={() => {dispatch(ageUpdate())}}>갯수바꾸기</Button>
            <Table  striped bordered hover >
      <thead>
        <tr>
          <th>번호</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {
            cart.map(v =>
                <tr>
                    <td>{v.id}</td>
                    <td>{v.name}</td>
                    <td>{v.count}</td>
                    <td><Button variant="outline-secondary" onClick={() => {
                        dispatch(changeName())
                    }} > 이름바꾸기 </Button></td>
                </tr>
            )
        }
      </tbody>
    </Table>
        </div>
    )
}

export default Cart;