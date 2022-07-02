import React from 'react'
import './Card.css';
import emailSvg from '../assets/email.svg'
import locaSvg from '../assets/location.svg'
import phoneSvg from '../assets/phone.svg'


const Card = ({data,getUser}) => {
  const {
    cell,
    dob,
    email,
    location,
    name,
    nat,
    picture,
    registered
  } = data
  console.log(data)
  return (
    <>
   
   <div className="card" >
    <div className="left">
      <div className="img" style={{background : ` url(${picture.large})`}}>
        

      </div>
      <div className="icon-box">
      <img src={emailSvg} alt="email" className=" icon" />
     
   
      <img src={phoneSvg} alt="location" className=" icon" />
   
    
      <img src={locaSvg} alt="phone" className=" icon" />
    </div>
  
    </div>
    <div className="right">
      <p className="name"> {name.title} {name.first} {name.last} </p>
      <p className="email" >{email} </p>
      <p className="phone">
        {cell}
      </p>
      <p className="loca">
        {location.city}-{location.country} 
      </p>
      <div className="age" >

     <p>
        Age : {dob.age}
      </p>
      <p className="register">
        Register Date : {registered.date.slice(0,10)}
      </p>
      </div>
    </div>
    
   </div> 
    <button onClick={() => getUser()}>Random User</button>
    </>
     
  )
}

export default Card
