import { configureStore, createSlice } from '@reduxjs/toolkit';

import user from './userSlice'


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
            let i = state.findIndex(a => a.id == action.payload)
            state[i].count++
        },
        addItem(state, action) {
            state.push(action.payload)
        }
    }
})
export let { countIncrese, addItem } = cart.actions


export default configureStore({   //여기에 만들면 다 가져다가 사용할 수 있다
    reducer: {
        //2. 1번에 만든 createSlice를 등록
        //   내맘대로(이름) : user.reducer  반드시 내보내기 해야 사용 가능
        user : user.reducer ,
        stock : stock.reducer ,
        cart : cart.reducer
    }
})