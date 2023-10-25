
import * as moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import { markFavoriteItem } from "/home/ravi/Desktop/Email List/my-app/my-app/src/app/countersclice";

import './index.css';

const EmailHead=()=>{
    const filterList=useSelector(state=>state.emailList.filterEmailList)
    
    const dispatch=useDispatch()

    const markFavorite=(id)=>{
        console.log(id)
        dispatch(markFavoriteItem(id))
    }

    return(filterList.length===0?"":
        <div className='email-head'>
        <div className='capital-letter-date-name'>
            <div className='first-letter-name'><p>{filterList.length===0?"":filterList[0].from.name[0].toUpperCase()}</p></div>
            <div className='email-head-name-date'>
                <p className='subject-name'>{ filterList.length===0?"": filterList[0].subject}</p>
                <p>{filterList.length===0?"":moment(Date(filterList[0].date)).format('DD/MM/YYYY HH:MMa')}</p>
            </div>
        </div>
        <button type='button' className='favorite-btn' onClick={()=>markFavorite(filterList[0].id)}>Mark as favorite</button>
        </div>
    )
}
export default EmailHead