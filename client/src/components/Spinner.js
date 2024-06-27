import React,{useState,useEffect} from 'react';
import { useNavigate ,useLocation } from 'react-router-dom';
//import { interval } from './../../../node_modules/rxjs/dist/esm5/internal/observable/interval';
const Spinner = ({path = "login"}) => {
const [count , setCount ] =useState(3)
const navigate = useNavigate()
const location = useLocation()
useEffect(() => {
    const interval =setInterval(()=>{
        setCount((count) => count -1)
    },1000)
    count ===0 && navigate(`/${path}`, {
        state: location.pathname
    }) 
    return () => clearInterval(interval)
}
,[count , navigate ,location,path])
return (<>
  <div className="d-flex justify-content-center align-items-center" 
  style={{height: '100vh'}}>
    <h1 className='Text-center' >{count} Redirecting 

    </h1>
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  </>
);
};

export default Spinner;
