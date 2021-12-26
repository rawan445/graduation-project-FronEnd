import React from 'react'
import { useHistory } from "react-router-dom";

export default function CompAdmin() {
    const history = useHistory();

    return (
        <div>
     <hr/>
     <button onClick={() => {history.push("/Admin"); }}>الرجوع للوحة التحكم</button>  
<button>حذف شركة عقارية</button>  
<button>تحرير  شركة عقارية</button>
<button>اضافه شركه عقاريه</button>  
     <hr/>
        </div>
    )
}
