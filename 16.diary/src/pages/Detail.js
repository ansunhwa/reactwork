import { useNavigate, useParams } from "react-router-dom";
import Button from "../component/Button";
import Header from "../component/Header";
import Edit from "./Edit";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";

const Detail = (() => {
    const nav = useNavigate();
    const param = useParams();
    const data = useContext(DiaryStateContext);
    const [showItem, setShowItem] = useState();

    useEffect(() => {
        const show = data.find((item) => item.id == param.id)
        if(!show) {
            window.alert("없는 일기입니다.");
            nav("/", {replace : true})
        }
        setShowItem(show);
    },[param.id, data])

    return(
    <div>
        <Header title={" 상세보기 "}  
        leftChild={<Button text={"이전"} onClick={() => nav(-1)}/>}
        />
        <Edit initData={showItem} />
    </div>
    )
})

export default Detail;