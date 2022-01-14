import React from 'react'

import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Home.css"

export default function Home() {
    const history = useHistory();

    return (
        <>


            <div className="grid-container">
  <div className="grid-item">
      <img src='https://up4net.com/uploads4/up4net.com164084802579491.png'
      style={{width:"300px"}}
      onClick={() => {history.push("/Login");}}
      />
       {/* <button onClick={() => {history.push("/Login");}} >بوابة المنشآت</button> */}
</div>
  <div className="grid-item"> 
    
  <img src='https://up4net.com/uploads4/up4net.com164084802584122.png'
           onClick={() => {history.push("/Login");}}
     style={{width:"300px"}}
      />
        {/* <button onClick={() => {history.push("/Login"); }}>بوابة الأفراد</button> */}
</div>
</div>

</>
    )
}
