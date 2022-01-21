import React from 'react'

import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Home.css"

export default function Home() {
    const history = useHistory();

    return (
        <>
<div _ngcontent-uby-c90="" class="forYou">
<h1 className='h1foo'>نحن هنا من اجلك</h1>
<h4 className='h4foo'>يسهل موقع منصه السعوديه للعقارات عليك البحث عن المنازل وحفظ مفضلاتك و المعاملات العقارية في العديد من الأسواق مع وضع تدابير أمان جديدة والتواصل معنا أينما كنت</h4>
   
</div>
         <div className="grid-container">
  <div className="grid-item">
      <img className='immgg2' src='https://k.top4top.io/p_2208dlo992.png'
      onClick={() => {history.push("/Login");}}
      />
       {/* <button onClick={() => {history.push("/Login");}} >بوابة المنشآت</button> */}
</div>
  <div className="grid-item"> 
    
  <img  className='immgg1' src='https://j.top4top.io/p_2208kew771.png'
           onClick={() => {history.push("/Login");}}
      />
        {/* <button onClick={() => {history.push("/Login"); }}>بوابة الأفراد</button> */}
</div>
</div>

</>
    )
}
