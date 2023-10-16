 import React, { useEffect, useRef } from 'react'
 import { Link, useNavigate } from 'react-router-dom'
 import axios from 'axios'

 function Login() {
    let emailNameInputRef = useRef();
    let passwordInputRef = useRef();
    let navigate = useNavigate();
    
    useEffect(()=>{

        axios.defaults.baseURL = 'http://localhost:7777';
        axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
        emailNameInputRef.current.value = localStorage.getItem("email");
        passwordInputRef.current.value = localStorage.getItem("password");
      validateToken();
    
    },[]);
   

 let ValidateCredentials = async()=>{

let dataToSend = new FormData();
           
  dataToSend.append("email",emailNameInputRef.current.value);
  dataToSend.append("password",passwordInputRef.current.value);
        
let reqOptions ={
        
            method:"POST",
            body: dataToSend,
        };
        
        let JSONData = await fetch ("http://localhost:7777/validateLogin",reqOptions);
        let JSOData = await JSONData.json();

         alert(JSOData.msg);

        if(JSOData.Status == "Success"){
            console.log(JSOData);
        //   localStorage.setItem("email",emailNameInputRef.current.value);
        //   localStorage.setItem("password",passwordInputRef.current.value);
         localStorage.setItem("token",JSOData.token);

        navigate("/GetMovies",{state:JSOData});
    }else{
        // alert(JSOData.msg);
    }
     
    };


    let ValidateCredentialsThroughAxios = async()=>{

        let dataToSend = new FormData();
                   
          dataToSend.append("email",emailNameInputRef.current.value);
          dataToSend.append("password",passwordInputRef.current.value);

        

     let response = await axios.post("/validateLogin",dataToSend);

     console.log(response); 
     
                //  alert(response.data.msg);
        
                if(response.data.Status == "Success"){
                    console.log(response.data);
                //   localStorage.setItem("email",emailNameInputRef.current.value);
                //   localStorage.setItem("password",passwordInputRef.current.value);
                 localStorage.setItem("token",response.data.token);
        
                navigate("/GetMovies",{state:response.data});
            }else{
               alert(response.data.msg);
            }
             
            };


let validateToken = async()=>{
    let dataToSend = new FormData();
    dataToSend.append("token",localStorage.getItem("token"));

    let reqOpt = {
        method:"POST",
        body:dataToSend
    };
let JSONData = await fetch("http://localhost:7777/validateToken",reqOpt);
let JSOData = await JSONData.json();

console.log(JSOData);

};
    
return (
    <div className='loginForm'>
        <img id='loginImg' src='https://i.pinimg.com/564x/1b/5f/16/1b5f16b30a041e9c03bd07d03ed8280e.jpg'></img>

<form>
<h2><strong>Log in for <i>X</i>stream Play I'D.</strong></h2>
       <h4><i>*</i> indicates a required field.</h4>
          <div>
                <label><strong>Email i'd<i>*</i></strong></label>
                <input ref={emailNameInputRef} type='email'></input>
            </div>
            <div>
                <label><strong>Password<i>*</i></strong></label>
                <input ref={passwordInputRef} type='password'></input>
            </div>
           <div >
                <input  type='checkbox'></input>
                <label id='captcha'><strong>Remember Me.</strong></label>
            </div>
       <div>
<button  type='button' onClick={()=>{
 
        //   ValidateCredentials();
          ValidateCredentialsThroughAxios();
          }}>Log in</button>
</div>
<h3 id='note' ><strong>New to Xstream?</strong></h3>
           <Link className='loginSignup' to="/Signup"><strong>Sign up</strong></Link>
</form>

    </div>
  )
}

export default Login