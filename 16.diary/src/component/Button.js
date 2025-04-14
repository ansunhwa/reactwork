import "./Button.css";
/*
    text : 버튼의 글씨
    type : 일반버튼, 초록, 빨강 버튼인지
    onclick : 버튼이 클릭되었을 때 무엇을 받을 지(props로 받음)
*/

const Button = ({text, type, onClick}) => {   //매개변수,받을 값
    return <button className={`button button_${type}`} onClick={onClick}>{text}</button>
                            // 값 없으면 일반 button
    
}

export default Button;