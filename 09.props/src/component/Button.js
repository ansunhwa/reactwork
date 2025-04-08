import './Button.css';
//1
/*
const Button = () => {
    return (
        <>
            <button className='btn'>버튼</button>
        </>
    );
}
    */

//2
/*
const Button = (props) => {
    return (
        <>
            <button style={{color : props.btnValue.color}} className='btn'>버튼</button>
            <p>{props.btnValue.text} 입니다</p>
        </>
    );
}
*/

//3   2번도 받을 수 있음(객체분해할당)
const Button = ({color, text, b}) => {
    return (
        <>
            <button style={{color : color}} className='btn'>버튼</button>
            <p>{text}입니다</p>
            <p>{b}번 입니다</p>
        </>
    );
}


export default Button;
