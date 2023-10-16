import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';


function EditProfile() {

    
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let countryNameInputRef = useRef();
    let dateInputRef = useRef()
    let passwordInputRef = useRef();
    let confirmPasswordInputRef = useRef();
    let phoneNoInputRef = useRef();
    let profileInputRef = useRef();
    let[profile,SetProfile]=useState("./images/profile.jpg");

    let loc = useLocation();

    console.log("Now, edit the profile");
    console.log(loc);
  
    useEffect(()=>{

        firstNameInputRef.current.value = loc.state.firstName;
        lastNameInputRef.current.value = loc.state.lastName;
        countryNameInputRef.current.value = loc.state.country;
        dateInputRef.current.value = loc.state.date;
        passwordInputRef.current.value = loc.state.password;
        confirmPasswordInputRef.current.value = loc.state.confirmPassword;
       phoneNoInputRef.current.value = loc.state.phoneNumber;
    //   SetProfile(`http://localhost:7777/${loc.state.profile}`)
});
useEffect(()=>{
    // SetProfile(`http://localhost:7777/${loc.state.profile}`);

},[profile]);

   
let sendUpdateDataToServer = async()=>{

         let dataToSend = new FormData();
            dataToSend.append("fn",firstNameInputRef.current.value);
            dataToSend.append("ln",lastNameInputRef.current.value);
            dataToSend.append("country",countryNameInputRef.current.value);
            dataToSend.append("email",loc.state.email);
            dataToSend.append("date",dateInputRef.current.value);
            dataToSend.append("password",passwordInputRef.current.value);
            dataToSend.append("cpassword",confirmPasswordInputRef.current.value);
            dataToSend.append("pn",phoneNoInputRef.current.value);
            // dataToSend.append("profile",profileInputRef.current.files[0]);
            for(let i=0;i<profileInputRef.current.files.length;i++){
              dataToSend.append("profile",profileInputRef.current.files[i]);
            }
        
 let reqOptions ={
        
            method:"PATCH",
            body: dataToSend,
        };
        
let JSONData = await fetch ("/updateDetails",reqOptions);
let JSOData = await JSONData.json();

alert(JSOData.msg);

console.log(JSOData);
    };
    
return (
    <div>

<form>
    <h2><strong>Edit profile</strong></h2>
    <p><b>Keep your personal details private.</b></p>
       <p><strong>Information you add here is visible to any who can view your profile.</strong></p>
       <div>
               <label><strong>User name<i>*</i></strong></label>
               <input ref={firstNameInputRef}></input>
           </div>
           <div>
               <label><strong>Last name<i>*</i></strong></label>
               <input ref={lastNameInputRef}></input>
           </div>
           <div>
               <label><strong>Country/Region<i>*</i></strong></label>
               <select id='size' ref={countryNameInputRef}>
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
                <input ref={dateInputRef} id='size' type='date'></input>
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
                <label><strong>Change Profile<i>*</i></strong></label>
                <input ref={profileInputRef} type='file'  
                onChange={()=>{

                    let selectedUrl =URL.createObjectURL(
                    profileInputRef.current.files[0]
                    );
                    console.log(selectedUrl);
                    SetProfile(selectedUrl);

                }}

                
                ></input>
            </div>
            <div>
                <img className='profilePic' src={profile}></img>
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
 
 sendUpdateDataToServer();

          }}><strong>Save</strong></button>
</div>
<div>
    <h2 id='note'><strong>Already have an account?  </strong></h2>
</div>
<Link className="signupLogin" to="/Login"><b>Login</b></Link>
</form>


<br></br>


    </div>
  )
}

export default EditProfile;