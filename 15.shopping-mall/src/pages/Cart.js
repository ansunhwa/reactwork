import { Button, Table } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import { countIncrese } from '../store/store'
//import user1 from '../store/userSlice';

/*
    * Redux 변경하기
      1. store.js에서 변경해주는 함수 만들고
      2. export
      3. dispatch()로 감싸서 사용
*/
function Cart() {
    // 원하는 것만 가져오기
    let user = useSelector((state) => state.user)
    let cart = useSelector((state) => state.cart)
    //변경/ store.js에 요청을 보내주는 함수
    let dispatch = useDispatch()
    //let stock = useSelector((state) => state.stock)  //배열로 되어있음
    //let user1 = useSelector((state) => state.user1)
    
    return(
        <div>
            {user.name}의 장바구니🛒 <br/>
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
                    <td><Button variant="outline-info" onClick={() => {
                                    dispatch(countIncrese(v.id))
                                }}>+</Button></td>
                </tr>
            )
        }
      </tbody>
    </Table>
        </div>
    )
}

export default Cart;