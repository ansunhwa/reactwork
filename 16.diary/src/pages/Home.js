import { useContext, useState } from "react";
import Button from "../component/Button";
import DiaryList from "../component/DiaryList";
import Header from "../component/Header";
import {DiaryStateContext} from '../App';

/*
    시작일
*/
const getMonthlyDate = (pivoDate, data) => {
    const beginTime = new Date(
        pivoDate.getFullYear(),
        pivoDate.getMonth(),
        1,
        0,
        0,
        0
    ).getTime();

    const EndTime = new Date(
        pivoDate.getFullYear(),
        pivoDate.getMonth() +1,
        0,
        23,
        59,
        59
    ).getTime();
    
    return data.filter((item) => beginTime <= item.createDate && EndTime >= item.createDate)
}


const Home = (() => {
    const[pivotDate, setPivoDate] = useState(new Date());  // 날짜 바뀌게 할거임Header

    const data = useContext(DiaryStateContext)
    const monthlyData = getMonthlyDate(pivotDate, data)

    const onIncreaseMonth = () => {
        setPivoDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1))
        // 값 바꿔줌 pivodate에서 년, 월 (+1) 값 변경하기
    }
    const onDecreasNonth = () => {
        setPivoDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() -1))
        // new Date(값) 데이터의 형태로 나와야 하기 때문에 한번 더 감싸준다
    }

    return(
    <div>

        <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`} //월은 0부터라서+1 
            leftChild ={<Button text={"<"} onClick={onDecreasNonth} />}//버튼에 만들어 놓은onClick={}
            rightChild = {<Button text={">"} onClick={onIncreaseMonth} />}    
        />
        <DiaryList data={monthlyData} />
    </div>
    )
})

export default Home;