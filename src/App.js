import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import { initialApi } from "./app/countersclice";
import EmailContent from "./components/EmailContent";
// import EmailHead from "./components/EmailHead";
// import EmailBody from "./components/EmailBody";
import EmailList from "./components/EmailList";
import Header from './components/Header';


const App =()=> {

const dispatch=useDispatch()
const emailList=useSelector(state=>state.emailList.singleEmailBody)
const initialList=useSelector((state)=>  state.emailList.emailList)

    useEffect(() => {
     
      const fetchData=async()=>{
        const result= await fetch("https://flipkart-email-mock.now.sh/")
        const data=await result.json()
        const listData= data.list
        dispatch(initialApi(listData))
      }
      fetchData()
      // return () => {
      //   cleanup
      // };
    }, []);
// console.log(`fgrgrg====${initialList}`)
  // componentDidMount(){
  //   this.fetchData();
  // }
   

  // render() {
    return (
      <div>
        <Header />
        <div className="email-body">
        <EmailList/>
        <EmailContent/>
        </div>
      </div>
    )
  // }
}

export default App
