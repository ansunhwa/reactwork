import Table from 'react-bootstrap/Table';
import {useSelector} from 'react-redux';

function Cart() {

    /* // redux 사용방법
    let state = useSelector((state) => { return state})
    console.log(state);
    console.log(state.user);
    console.log(state.stock);
    */

    // 원하는 것만 가져오기
    let user = useSelector((state) => state.user)
    console.log(user);

    let stock = useSelector((state) => state.stock)  //배열로 되어있음

    let cart = useSelector((state) => state.cart)
  
    

    return(
        <>
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
                    <td>변경</td>
                </tr>
            )
        }
      </tbody>
    </Table>
        </>
    )
}

export default Cart;