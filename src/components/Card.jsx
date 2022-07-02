import React from 'react'
import './Card.css';
import emailSvg from '../assets/email.svg'
import locaSvg from '../assets/location.svg'
import phoneSvg from '../assets/phone.svg'
const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="user-name user-info">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100" alt="profile photo" />
      <h1 className="name">Mr eric</h1>
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
      <button>Random User</button>

            </div>
    </div>
  )
}

export default Card
