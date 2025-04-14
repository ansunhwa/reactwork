import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import getEomtionImg from './util/emotion-img';  //그림 여러개를 넣어야 할 때 이런 방법도 있어용
import Button from './component/Button';

function App() {
  return (
    <div className="App">
      <div className='icon'>
      <img src={getEomtionImg(1)} width="70%"/>
      <img src={getEomtionImg(2)} />
      <img src={getEomtionImg(3)} />
      <img src={getEomtionImg(4)} />
      <img src={getEomtionImg(5)} />
      <img src={getEomtionImg(6)} />
      </div>
        <Button text={"일반버튼"} onClick={() => console.log("일반버튼 클릭")}/>
        <Button text={"빨간버튼"} type={"red"} onClick={() => console.log("빨간버튼 클릭")} />
        <Button text={"초록버튼"} type={"green"} onClick={() => console.log("초록버튼 클릭")} />
      <div>
        <Link to={"/"}>Home</Link> 
        <Link to={"/new"}>New</Link>
        <Link to={"/detail"}>Detail</Link>
        <Link to={"/edit"}>Edit</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/edit" element={<Edit />} />
        <Route path='*'  element={<div>없는 페이지 입니다</div>} />
      </Routes>
    
    </div>
  );
}

export default App;
