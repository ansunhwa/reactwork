import { configureStore, createSlice } from '@reduxjs/toolkit';
//import user1 from '/.userSlice';
//import user1 from '/.userSlice';
import {changeName} from './store';

//1. createSlice를 만든다  //만들어 놓은 상태, 바깥에서 사용 X 등록해줘야 함

let user = createSlice({  
    name : 'user',
    initialState : 'kim',  //변경할때 , 부터 ->
    reducers: {
        changeName(state) {  // 이름내맘대로(기존의 들어있던 자료가 들어옴)
            return 'nana kim'  // + state  = nanakim kim
        }
    }
}) 
export let {changeName} = user.actions;
  //export 해야 함 let{내가정한변수명} = user.actions 문법 default쓰면X

/*
  let user = createSlice({  
    name : 'user',
    initialState : 'kim',  //변경할때 , 부터 ->
    reducers: {
        changeName(state) {  // 이름내맘대로(기존의 들어있던 자료가 들어옴)
            return 'nana kim'  // + state  = nanakim kim
        },
       
    }
}) 
export let {changeName } = user.actions  수정한 거 보내기 해야 함
*/

  /*
  //객체 array 일 때
  let user = createSlice({  
    name : 'user',
    initialState : {name : 'kim', age : 23}, //age만 바꾸고 싶음 
    reducers: {
        changeName(state) {  
            return {name : 'kim', age : 25}  // 바꾸고 싶은 것만 하면 안되고 다 넣어 주고 바꾸고 싶은거 바꾸기
            //return {name : 'park', age : 25}   <- 둘다 바꿀 수 있음
        }
    }
}) 
export let {changeName} = user.actions
*/

// 직접 변경 가능


let stock = createSlice({
    name : 'stock',
    initialState : [7,15,8]
})

let cart = createSlice({
    name : 'cart' ,
    initialState : [
    {id: 1, name:'pants' , count : 2},
    {id: 2, name:'blueDress' , count : 1}
    ],
    reducers : {
        countIncrese(state, action) {
            state.findIndex(a => a.id == action.payload)
            state[i].count++ 
        }
    }
})


export default configureStore({   //여기에 만들면 다 가져다가 사용할 수 있다
    reducer: {
        //2. 1번에 만든 createSlice를 등록
        //   내맘대로(이름) : user.reducer  반드시 내보내기 해야 사용 가능
        user : user.reducer ,
        stock : stock.reducer ,
        cart : cart.reducer,
        user1 : user1.reducer
    }
})