import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';


function SignUp() {

    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let countryNameInputRef = useRef();
    let emailNameInputRef = useRef();
    let dateInputRef = useRef()
    let passwordInputRef = useRef();
    let confirmPasswordInputRef = useRef();
    let phoneNoInputRef = useRef();
    let profileInputRef = useRef();
     
let[profile,SetProfile]=useState("./images/profile.jpg");
  
let sendSignupDataToServer =async()=>{
   
   
let myHeader = new Headers();
myHeader.append("content-type","application/json");

let dataToSend = {

fn:firstNameInputRef.current.value,
ln:lastNameInputRef.current.value,
country:countryNameInputRef.current.value,
email:emailNameInputRef.current.value,
date:dateInputRef.current.value,
password:passwordInputRef.current.value,
cpassword:confirmPasswordInputRef.current.value,
pn:phoneNoInputRef.current.value

};

   let reqOptions = {
       method:"POST",
       headers:myHeader,
       body:JSON.stringify(dataToSend),
};

let JSONData = await fetch("http://localhost:7777/signup",reqOptions);
let JSOData = await JSONData.json();
console.log(JSOData);

};

let sendDataToServerURLEncoded = async()=>{

   
        let myHeader = new Headers()
        myHeader.append("content-type","application/x-www-form-urlencoded")
    
        let dataToSend = new URLSearchParams();
        dataToSend.append("fn",firstNameInputRef.current.value);
        dataToSend.append("ln",lastNameInputRef.current.value);
        dataToSend.append("country",countryNameInputRef.current.value);
        dataToSend.append("email",emailNameInputRef.current.value);
        dataToSend.append("date",dateInputRef.current.value);
        dataToSend.append("password",passwordInputRef.current.value);
        dataToSend.append("cpassword",confirmPasswordInputRef.current.value);
        dataToSend.append("pn",phoneNoInputRef.current.value);
    
    let reqOptions ={
    
        method:"POST",
        headers:myHeader,
        body: dataToSend,
    };
    
    let JSONData = await fetch ("http://localhost:7777/+signup",reqOptions);
    let JSOData = await JSONData.json();
    console.log(JSOData);
};
   
let sendDataToServerFormData = async()=>{

         let dataToSend = new FormData();
            dataToSend.append("fn",firstNameInputRef.current.value);
            dataToSend.append("ln",lastNameInputRef.current.value);
            dataToSend.append("country",countryNameInputRef.current.value);
            dataToSend.append("email",emailNameInputRef.current.value);
            dataToSend.append("date",dateInputRef.current.value);
            dataToSend.append("password",passwordInputRef.current.value);
            dataToSend.append("cpassword",confirmPasswordInputRef.current.value);
            dataToSend.append("pn",phoneNoInputRef.current.value);
            // dataToSend.append("profile",profileInputRef.current.files[0]);
            for(let i=0;i<profileInputRef.current.files.length;i++){
              dataToSend.append("profile",profileInputRef.current.files[i]);
            }
        
 let reqOptions ={
        
            method:"POST",
            body: dataToSend,
        };
        
let JSONData = await fetch ("/signup",reqOptions);
let JSOData = await JSONData.json();

alert(JSOData.msg);

console.log(JSOData);
    };
    
return (
    <div>
<form>
<br></br>
       
       <h2><strong>Create Your <i>X</i>stream Play I'D</strong></h2>
       <h4><i>*</i> indicates a required field.</h4>
           <div>
               <label><strong>First name<i>*</i></strong></label>
               <input ref={firstNameInputRef}></input>
           </div>
           <div>
               <label><strong>Last name<i>*</i></strong></label>
               <input ref={lastNameInputRef}></input>
           </div>
           <div>
               <label><strong>Country/Region<i>*</i></strong></label>
               <select ref={countryNameInputRef}>
               <option >select..</option>
                   <option value="Aland lslands">Aland lslands</option>
                   <option value=" Belize">Belize</option>
                   <option value="Colombia">Colombia</option>
                   <option value="France">France</option>
                   <option value="Egypt">Egypt</option>
                   <option value="France">France</option>
                   <option value="India">India</option>
               </select>
           </div>
        <div>
                <label><strong>Date of birth<i>*</i></strong></label>
                <input ref={dateInputRef} id='date' type='date'></input>
            </div>
            <div>
                <label><strong>Email i'd<i>*</i></strong></label>
                <input ref={emailNameInputRef} type='email'></input>
            </div>
            <div>
                <label><strong>Password<i>*</i></strong></label>
                <input ref={passwordInputRef} type='password'></input>
            </div>
            <div>
                <label><strong> confirm password<i>*</i></strong></label>
                <input ref={confirmPasswordInputRef} type='password'></input>
            </div>
            <div>
                <label><strong>Phone number<i>*</i></strong></label>
                <input ref={phoneNoInputRef} type='number'></input>
                <br></br>
                <br></br>
            </div>
            <div>
                <label><strong>Profile<i>*</i></strong></label>
                <input ref={profileInputRef} type='file'  
                onChange={()=>{

                    let selectedUrl =URL.createObjectURL(
                    profileInputRef.current.files[0]
                    );
                    SetProfile(selectedUrl);

                }}

                
                ></input>
            </div>
            <div>
                <img className='profilePic' src={profile}></img>
            </div>
            <div >
                <input  type='checkbox'></input>
                <label id='captcha'><strong>I agree to the Terms of Service </strong></label>
            </div>
            {/* <div>
                <button id='signup' type='button' onClick={()=>{
                  sendSignupDataToServer();  
                  alert("Successfully created your account'")
                }}>Sign Up'</button>
</div>   */}
{/* <div>
          <button  type='button' onClick={()=>{
 
 sendDataToServerURLEncoded();

          }}>URL Encoded</button>
</div> */}
<div>
<button type='button' onClick={()=>{
 
 sendDataToServerFormData();

          }}>Create your Xstream</button>
</div>
<div>
    <h2 id='note'><strong>Already have an account?  </strong></h2>
</div>
<Link className="signupLogin" to="/Login"><b>Login</b></Link>
</form>


<br></br>
<img id='signupImg' src='https://i.pinimg.com/564x/f7/ee/d9/f7eed96c7bbdd5ba8d639ca0bfcf8931.jpg'></img>


    </div>
  )
}

export default SignUp