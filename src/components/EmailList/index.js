// Write your code here
import * as moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import './index.css';
import { emailBodyApi, filterEmail } from "/home/ravi/Desktop/Email List/my-app/my-app/src/app/countersclice";



const EmailList=()=>{
    const initialList=useSelector(state=>state.emailList.emailList)
    const emailList=useSelector(state=>state.emailList.singleEmailBody)
    const selectedEmail=useSelector(state=>state.emailList.selectedList)
    const dispatch=useDispatch()
    const getEmailData=async (id)=>{
        const singlebody=await fetch(`https://flipkart-email-mock.now.sh/?id=${id}`)
        const jsonBody=await singlebody.json()
        dispatch(emailBodyApi(jsonBody))
        dispatch(filterEmail(id))
    }
const unReadEmail=()=>{
    return  <ul className={emailList.length===0? "email-data-list" : "width-list"}>
    {initialList.map((each)=>
        <li className='list-item' key={each.id} onClick={()=>getEmailData(each.id)}>
            <div className='first-letter'><p>{each.from.name[0].toUpperCase()}</p></div>
            <div className='email-content'>
                <p>From: <span>{each.from.email}</span></p>
                <p>Subject: <span>{each.subject}</span></p>
                <p>{each.short_description}</p>
                <div className='date-favorite'>
                    <p>{moment(Date(each.Date)).format('DD/MM/YYYY HH:MMa') }</p>
                    {each.isFavorite&&<p className='favorite-mark'>Favorite</p>}
                </div>
            </div>
        </li>
    )
    }
    </ul>
}
const readEmail=()=>{
    return  <ul className={emailList.length===0? "email-data-list" : "width-list"}>
    {initialList.map((each)=> each.isFavorite!==undefined || each.isFavorite===true?null:
        <li className='list-item' key={each.id} onClick={()=>getEmailData(each.id)}>
            <div className='first-letter'><p>{each.from.name[0].toUpperCase()}</p></div>
            <div className='email-content'>
                <p>From: <span>{each.from.email}</span></p>
                <p>Subject: <span>{each.subject}</span></p>
                <p>{each.short_description}</p>
                <div className='date-favorite'>
                    <p>{moment(Date(each.Date)).format('DD/MM/YYYY HH:MMa') }</p>
                    {each.isFavorite&&<p className='favorite-mark'>Favorite</p>}
                </div>
            </div>
        </li>
    )
    }
    </ul>
}

    const favoriteEmailList=()=>{
        return(
            <ul className={emailList.length===0? "email-data-list" : "width-list"}>
            {initialList.map((each)=> each.isFavorite===undefined?null:
                <li className='list-item' key={each.id} onClick={()=>getEmailData(each.id)}>
                    <div className='first-letter'><p>{each.from.name[0].toUpperCase()}</p></div>
                    <div className='email-content'>
                        <p>From: <span>{each.from.email}</span></p>
                        <p>Subject: <span>{each.subject}</span></p>
                        <p>{each.short_description}</p>
                        <div className='date-favorite'>
                            <p>{moment(Date(each.Date)).format('DD/MM/YYYY HH:MMa') }</p>
                            {each.isFavorite&&<p className='favorite-mark'>Favorite</p>}
                        </div>
                    </div>
                </li>
            )
            }
            </ul>
        )
    }

       switch (selectedEmail) {
        case "favorite":
            console.log("favorite List")
            return favoriteEmailList()
        case "unread":
            return unReadEmail()
            case "read":
                return readEmail()
        default:
            return unReadEmail()
             
            
       }
}
 


export default EmailList