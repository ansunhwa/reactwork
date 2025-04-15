import { useContext } from "react";
import Button from "../component/Button";
import Header from "../component/Header";
import Edit from "./Edit";
import { useNavigate } from 'react-router-dom';
import {DiaryDispathContext} from '../App';


const New = (() => {
    const nav = useNavigate();
    const { onCreate } = useContext(DiaryDispathContext)
    const onSubmit = (input) => {
        onCreate(
            input.createDate.getTime(),
            input.emotionId,
            input.content
        )
        nav("/", { replace : true})
    }
    return(
    <div>
    <Header title={"📖일기 쓰기📖"}
            leftChild={<Button text={"이전"} onClick={() => nav(-1)}/>} />
        <Edit onSubmit={onSubmit} />
    </div>
    )
})

export default New;