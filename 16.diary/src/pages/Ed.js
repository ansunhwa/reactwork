import { useNavigate, useParams } from "react-router-dom";
import Button from "../component/Button";
import Header from "../component/Header";
import Edit from "./Edit";
import { useContext, useEffect, useState } from "react";
import { DiaryDispathContext, DiaryStateContext } from "../App";

const Ed = (()=> {
    const params = useParams();
    const nav = useNavigate();
    const { onDelete, onUpdate } = useContext(DiaryDispathContext);
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();


    const onClickDelete = () => {
        if(window.confirm("일기를 삭제하시겠습니까?")) {
            onDelete(params.id);
            nav("/", {replace : true})
        }
    }

    const onSubmit = (input) => {
        if(window.confirm("일기를 수정하시겠습니까?")) {
            onUpdate(
                params.id,
                input.createDate.getTime(),
                input.emotionId,
                input.content
                )
                nav("/", {replace : true})
        }
    }   

    useEffect(() => {
         const CurrentDiaryItem = data.find((item) => item.id == params.id)
         if(!CurrentDiaryItem) {
             window.alert("존재하지 않는 일기입니다.");
             nav("/", {replace : true})
         }
         setCurDiaryItem(CurrentDiaryItem);       
    },[params.id, data])

    return(
        <div>
        <Header title={" 수정하기📑 "} 
        leftChild={<Button text={"이전"} onClick={() => nav(-1)}/>}
        rightChild={<Button text={"삭제"} type={"red"} onClick={onClickDelete}/>} 
        />
        <Edit initData = {curDiaryItem} onSubmit={onSubmit}/>
        </div>
    )
})

export default Ed;