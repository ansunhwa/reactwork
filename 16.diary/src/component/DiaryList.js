import { useState } from "react";
import Button from "../component/Button";
import DiaryItem from "./DiaryItem";
import './DiaryList.css';
import { useNavigate } from "react-router-dom";

const DiaryList = (({data}) => {
    const nav = useNavigate();
    const [sortType, setSortType] = useState('latest')

    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    }
    /*
        *Sort : 원본파일 바뀌어서 들어옴
        *ES2023 새로 생김 : toSorted() -> 원본은 그대로 유지하고 sort된 data만 반환
        a-b를 한 결과 / 값 비교를 위해 꼭 값 2개 넣어줘야함
        음수 : 자리바꿈 안함(0포함)
        양수 : 자리바꿈
    */
    const getSortedData = () => {
        return data.toSorted((a,b) => {
            if(sortType == "oldest") {
                return a.createDate - b.createDate;  //오름차순
            } else {
                return b.createDate - a.createDate;  //내림차순
            }
        })
    }

    const sortedData = getSortedData();

    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select value={sortType} onChange={onChangeSortType}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button text={"새 일기 쓰기"} type={"green"} onClick={()=> nav("/new")}></Button>
            </div>
            <div className="list_wrapper">
                {sortedData.map((item) => <DiaryItem {...item} key={item.id}/>)}
                  
            </div>            
        </div>
    )
})

export default DiaryList;