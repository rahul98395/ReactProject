
// import './App.css';
// import Body from './components/Body'
// function App() {
//   return (
//     <div>
//         <Body/>
//       </div>
//   );
// }

// export default App;

// import Header from './components/Header'
// import Search from './components/Search'
// import Tasks from './components/Tasks'
// import {useState,useEffect} from 'react'
// import axios from 'axios'

// function App() {
//   useEffect(()=>{
//    getDoctorsFromServer()
//   },[])

//   const getDoctorsFromServer=()=>{
//      axios.get(`http://localhost:9090/HealthcareProviders`).then(
//       (response)=>{
//         setData(response.data)
//       },
//       (error)=>{
//         console.log(error);
//       }
//      )
//     }

//     const [data,setData]=useState([
//       {
//         id:1,
//         name:'gaurav singh',
//         address:'varanasi',
//         doctorType: 'Pedatrics',
//         contactNo:'80007477478'
//       },
//       {
//         id:2,
//         name:'rahul yadav',
//         address:'varanasi',
//         doctorType:'Pedatrics',
//         contactNo:'80007477478'
//       },
//     ] )
//   return (
//        <div className="App">
//         <Header/>
//         <Search datas={data} setData={setData}/>
//         <Tasks datas={data}/>
//        </div>

//   );
//   }
     
//   export default App;
   
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Health from "./pages/Health";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/health' element={<Health/>}/>
      </Routes>
    </Router>
  );
}

export default App




















































