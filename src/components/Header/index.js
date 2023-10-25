import { useDispatch, useSelector } from "react-redux";
import './index.css';
import { selectMethod } from "/home/ravi/Desktop/Email List/my-app/my-app/src/app/countersclice";

const Header = () => {
  const selectedEmailList=useSelector(state=>state.emailList.selectedList)
  const dispatch=useDispatch()
const toggleList=(value)=>{
  dispatch(selectMethod(value))
}
console.log(selectedEmailList)
  return(
  <div className='header-content'>
    <p>Filtter by:</p>
    <button className={selectedEmailList==="unread"?'unread-button filter-button':'unread-button '} onClick={()=>toggleList("unread")}>Unread</button>
    <button className={selectedEmailList==="read"?'read-button filter-button':'read-button'} onClick={()=>toggleList("read")}>Read</button>
    <button className={selectedEmailList==="favorite"?'favorites-button filter-button':'favorites-button'} onClick={()=>toggleList("favorite")}>Favorites</button>
  </div>
  )
  }

export default Header
