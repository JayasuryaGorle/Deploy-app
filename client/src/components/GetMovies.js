import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

function GetMovies() {
let navigate = useNavigate();
let loc = useLocation();
console.log(loc);

let [movies,setMovies]=useState([]);
let moviesGetFromServer =async ()=> {

let reqOption ={
    method:"GET"
};

   let JSONData = await fetch("http://localhost:7777/getMovie",reqOption);
   let JSOData = await JSONData.json();
   setMovies(JSOData);
   console.log(JSOData);

};

let deleteAccount =async ()=>{


let dataToSend = new FormData();
dataToSend.append("email",loc.state.data.email)

let reqOpt ={
  method:"DELETE",
  body:dataToSend
};

let JSONData = await fetch("http://localhost:7777/deleteAcc",reqOpt);
let JSOData = await JSONData.json();

if(JSOData.Status =="Success"){

 localStorage.clear(); 
alert(JSOData.msg);
navigate("/Login")
}else{
  alert("Sometimes Wrong");
}

};

  return (
    <div>
      <Link id='homeLogout' to="/Login"><strong>Log out</strong></Link>
      <button id='edit' onClick={()=>{
      navigate("/EditProfile",{state:loc.state.data})


      }} type='button'><strong>Edit profile </strong></button>
      <button id='delete' type='button' onClick={()=>{
       deleteAccount();    

      }}><strong>Delete Profile<b>?</b></strong></button>
    
      <div className='information'>
     <h2><strong><i>Store</i>.The best way to see the movies'</strong></h2>
    
     
     
<div id='container' >
<h5><strong>#<b>The latest</b>.Take a look at what's new.</strong></h5>
{/* <b>Xstream shows </b> */}
<img src={`http://localhost:7777/${loc.state.data.profile}`}></img>
<h2><strong>{loc.state.data.firstName}. <b>{loc.state.data.lastName}</b></strong></h2>
<p><strong>{loc.state.data.email}</strong></p>


</div>

{/* <h1>{loc && loc.state && loc.state.data && loc.state.data.firstName?loc.state.data.firstName:"Hello❗"} {loc && loc.state && loc.state.data && loc.state.data.lastName?loc.state.data.lastName:" "}</h1>
<img src={`http://localhost:7777/${loc && loc.state && loc.state.data && loc.state.data.profile?loc.state.data.profile:" "}`}></img> */}

     </div>
        <button id='playButton' type='button' onClick={()=>{
          moviesGetFromServer();
        }}><strong><mark>▶️</mark> Watch Now'</strong></button>
        
        <div className='container'>
        {movies.map((element,index)=>{
      return  <div className='box'>
        <br></br>
        <img src={element.image}></img>
      <h1 key={index} id='name' >{element.name}</h1>
      <h3 >Star's:{element.stars}</h3>
      <h3>Director:{element.director}</h3>
      <h2 id='rating'>{element.rating}⭐</h2>
               
        </div>
        })}
    </div>
    </div>
  )
}

export default GetMovies