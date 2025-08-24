import React from 'react'
import Logo from '../assets/Logo.png'
import Avatar from '../assets/Avatar.png'
function Header() {
  return (
  <header className="navbar">
      <div className="search-container">
       
        <input type="text" className="search-input" placeholder="Search Pipedrive" />
         <i class='bxr  bx-search search-icon '  ></i>
        
      </div>

      <div className="navbar-center">
        <img
          src={Logo}
          alt="logo"
          className="logo"
        />
        
      </div>

      <div className="navbar-right">
        <button className="add-btn">+</button>
        <div className='divider'></div>
        <span className="icon add-btn1"><i class='bxr  bx-gift '  ></i> </span>
        <span className="icon add-btn1"><i class='bxr  bx-envelope'  ></i> </span>
        <span className="icon add-btn1"><i class='bxr  bx-bell'  ></i> </span>

        <div className="profile">
          <img
            src={Avatar}
            alt="profile"
            className="profile-pic"
          />
          <div className="profile-info">
            <span className="name">Phyllis Yang</span>
            <span className="company">Silicon Links Inc</span>
          </div>
        </div>
      </div>
      
    </header>
  )
}

export default Header

