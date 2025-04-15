import { useEffect, useState } from "react";
import Button from "../component/Button";
import EmotionItem from "../component/EmotionItem";
import './Editor.css'
import { useNavigate } from "react-router-dom";

const emotionList = [
    {
        emotionId : 1,
        emotionName : "좋아"
    },
    {
        emotionId : 2,
        emotionName : "눈물"
    },
    {
        emotionId : 3,
        emotionName : "흠?"
    },
    {
        emotionId : 4,
        emotionName : "그냥"
    },
    {
        emotionId : 5,
        emotionName : "아휴"
    },
    {
        emotionId : 6,
        emotionName : "하트"
    }
]

const Edit = ({onSubmit, initData}) => {
    const nav = useNavigate();

    useEffect(() => {  //앞에서 받아온 값 넘어옴-> 수정하기 누르면 원래있던 값이 나옴
        if(initData) {
            setInput({
                ...initData,
                createDate : new Date(initData.createDate)
            })
        }
    }, [initData])
    
    const [input, setInput] = useState({
        createDate : new Date() ,
        emotionId : 4,
        content: " "
    })

    const getStringDate = (targetDate) => {//날짜관련
        //yyyy-mm-dd
        let year = targetDate.getFullYear();
        let month = targetDate.getMonth() +1;
        let date = targetDate.getDate();
        if(month <10 ) {
            month = `0${month}`;
        }
        if(date < 10) {
            date = `0${date}`;
        }

        return `${year}-${month}-${date}`;
    } 
    
    const onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name == "createDate") {
            value = new Date(value);  //String을 Date로 바궈서 넣어줌 스트링으로 들어온 글씨를 날짜로
        }

        setInput({
            ...input, [name] : value     //input에 있는 키->content(name)에 값(value)들어옴
        })
    }

    return(
    <div className="Editor">
        <section>
            <h4>오늘 날짜📆</h4>
            <input name="createDate" 
                    type="date" 
                    value={getStringDate(input.createDate)} 
                    onChange={onChangeInput}    
                    />
        </section>
        <section>
            <h4>오늘의 기분🎨</h4>
            <div className="emotion_list">  
                {
                    emotionList.map((item)=> (
                        <EmotionItem 
                        onClick={() => 
                            onChangeInput({
                                target : {
                                    name : "emotionId",
                                    value : item.emotionId
                                }
                            })
                        }
                        {...item}
                        isSelected={item.emotionId == input.emotionId}
                        />
                    ))
                }
            </div>
        </section>
        <section>
            <h4>오늘의 일기📝</h4>
            <textarea rows="5" cols="60"  name="content" value={input.content} 
                                                        onChange={onChangeInput}/>
        </section>
        <section className="btn">
            <Button text={"취소하기"} onClick={() => nav(-1)} />
            <Button text={"작성완료"} type={"green"} onClick={() => {onSubmit(input)}}/>
        </section>
    </div>
    )
}

export default Edit;