import Button from "../component/Button";
import DiaryList from "../component/DiaryList";
import Header from "../component/Header";


const Home = (() => {
    return(
    <div>
        <h4>Home</h4>
        <Header title={"2025년 4월"} 
            leftChild ={<Button text={"<"} />}
            rightChild = {<Button text={">"} />}    
        />

        <DiaryList />
    </div>
    )
})

export default Home;