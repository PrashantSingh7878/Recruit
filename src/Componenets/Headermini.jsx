import React from 'react'

function Headermini() {
  return (
    <div className="header-container">
      <div className="breadcrumbs">
        <a href="#" className="link">Candidates</a>
        <span className="separator"><i class='bxr  bx-chevron-right'  ></i> </span>
        <span className="name">Robert Hardy</span>
        <span className="id">ID - 231</span>
      </div>

      <div className="actions">
        <button className="btn secondary">Request Profile Update</button>
        <button className="btn secondary">Previous</button>
           <button className="btn secondary">Next</button>
      </div>
    </div>
  )
}

export default Headermini