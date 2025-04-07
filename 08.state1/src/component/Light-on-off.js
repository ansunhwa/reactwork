import { useState } from "react";

const LightOnOff = () => {
    // light = true, false
    const [light, setLight] = useState(false);
    return (
        <>
            {light ? <h1 style={{color:'yellow'}}>전구ON</h1> : <h1>전구OFF</h1>}
            <button onClick={()=>{setLight(!light)}}>
                {light == true ? "끄기" : "켜기"}
            </button>
            
        </>
    )
}

export default LightOnOff;