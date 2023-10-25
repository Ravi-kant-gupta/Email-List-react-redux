/* eslint-disable jsx-a11y/img-redundant-alt */

import './index.css';

import { useSelector } from "react-redux";

const EmailBody=()=>{
    const emailList=useSelector(state=>state.emailList.singleEmailBody)
    const filterList=useSelector(state=>state.emailList.filterEmailList)
    
    return (
        filterList.length===0?null:<div className='email-body'>
        {/* <EmailHead/> */}
        <div dangerouslySetInnerHTML={{__html: emailList.body} } className="xyz" >
            
        </div>
        </div>
    )

}

export default EmailBody
// className="top-carousal-image"
