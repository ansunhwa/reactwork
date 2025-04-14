import { createSlice } from '@reduxjs/toolkit';

let user1 = createSlice({  
    name : 'user1',
    initialState : {name : 'kim', age : 23}, 
    reducers: {
        changeName1(state) {  
            state.name = 'park'   // 이름만 변경 할 수 있음
        },
        ageUpdate(state, num) {
            state.age += num.payload    // 이렇게 써도 되고 = 28 해도 됨
        }
    }
}) 
export let {changeName1, ageUpdate} = user1.actions    //내보내기
export default user1;