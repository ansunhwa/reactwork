import { useNavigate } from "react-router-dom";
import getEomtionImg from "../util/emotion-img";
import Button from "./Button";
import './DiaryItem.css';

const DiaryItem = ({id, emotionId, createDate, content}) => {
    const nav = useNavigate();
    return (
        <div className="DiaryItem">
            <div className="img_section">
                <img src={getEomtionImg(emotionId)}></img>
            </div>
            <div className="info_section">
                <div>{new Date(createDate).toLocaleDateString()}</div>
                <div onClick={() => nav(`/detail/${id}`)}>{content}</div>
            </div>
            <div className="button_section">
                <Button text={"수정하기"} 
                onClick={() => nav(`/ed/${id}`)} />
            </div>
        </div>
    )
}

export default DiaryItem;