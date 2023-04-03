import React from 'react'
import "./MenuLink.css"

const Menulink = ({Icon,text}) => {
  return (
    <div className='menuLink'>
         {Icon}
        <span className="menuLinkText">{text}</span>
        <span className="menuLinkTextName">{text==="logout (Amber)"}</span>
    </div>
  )
}

export default Menulink