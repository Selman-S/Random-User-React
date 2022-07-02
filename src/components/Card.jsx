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
    <div className="card-container">
      <div className="card">
        <div className="user-name user-info">
          <div className="img " style={{ background: `url(${picture.large}) center center no-repeat `,width:"120px", height:"120px",backgroundSize: "contain",borderRadius:"50%"  }}>
            

          </div>
      <h5 className="name">{name.title} {name.first} {name.last}</h5>
        </div>
        <div className="user-name icon user-info">
  <img src={emailSvg} alt="email" />  <p className="email">eric@hotmail.com</p>
        </div>
        <div className="user-name icon user-info">
           <img src={locaSvg} alt="" /> <p className="tel">05445878878</p>
          </div>
          <div className="user-name icon user-info">
          <img src={phoneSvg} alt="" /> <p className="loca">Ankara-TURKEY</p>
          </div>
          <div className="user-name user-info-contact">
           <p className="age">AGE: 34</p>
          </div>
          <div className="user-name user-info-contact">
          <p className="register">Register Date: 2004-07-12</p>


          </div>
       
            </div>
            <div className="btn">
      <button onClick={() => getUser()}>Random User</button>

            </div>
    </div>
  )
}

export default Card
