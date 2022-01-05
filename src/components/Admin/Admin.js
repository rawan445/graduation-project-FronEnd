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
            <h4>لوحة التحكم  <RiSettings5Line/></h4>
     <hr/>
        <button className='but' onClick={() => {history.push("/RentAdmin"); }}><MdOutlineBedroomParent/></button>  
        <button className='but' onClick={() => {history.push("/BuyAdmin");  }}>  <MdPointOfSale/></button>  
        <button className='but' onClick={() => {history.push("/CompAdmin"); }}> <ImOffice/></button>  
        <button className='but' onClick={() => {history.push("/UserAdmin"); }}> <FaUsers/>     </button>  
 

        </div>
    )
}
