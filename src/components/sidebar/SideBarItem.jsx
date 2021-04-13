import React, { useState } from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import '../../styles/SidebarItem.css'

const SideBarItem = ({ arrow, icon, label }) => {
  const [click, setClick] = useState(false)

  const handleChange = () => {
    setClick(!click)
  }

  return (
    <div className="sidebarItem">
      <div className="sidebarItem__arrow">{arrow && <ArrowRightIcon />}</div>

      <div
        className={`sidebarItem__main ${click ? "sidebarItem__colorchange" : ""}`}
      >
        {icon}
        <a onClick={handleChange}>{label}</a>
      </div>
    </div>
  );
}

export default SideBarItem
