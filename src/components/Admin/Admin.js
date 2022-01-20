import React from 'react'
import { useHistory } from "react-router-dom";
import { FaUsers } from 'react-icons/fa';
import { ImOffice } from 'react-icons/im';
import { RiSettings5Line } from 'react-icons/ri';
import { MdOutlineBedroomParent ,MdPointOfSale} from 'react-icons/md';

import './Admin.css'
export default function Admin() {
    const history = useHistory();

    return (
        <div>
            <div _ngcontent-uby-c90="" class="forYou">
<h1 className='h1foo'>لوحة التحكم  <RiSettings5Line/></h1>
<h4 className='h4foo'> </h4>
   
</div>
            <h4> </h4>
     <hr/>
        <button className='but' onClick={() => {history.push("/RentAdmin"); }} style={{width:"200px",color:"#4B6587"} }><MdOutlineBedroomParent/></button>  
        <button className='but' onClick={() => {history.push("/BuyAdmin");  }} style={{width:"200px",color:"#4B6587"}}>  <MdPointOfSale/></button>  
        <button className='but' onClick={() => {history.push("/CompAdmin"); }} style={{width:"200px",color:"#4B6587"}}> <ImOffice/></button>  
        <button className='but' onClick={() => {history.push("/UserAdmin"); }} style={{width:"200px",color:"#4B6587"}}> <FaUsers/>     </button>  
 

        </div>
    )
}
