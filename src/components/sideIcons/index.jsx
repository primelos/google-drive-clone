import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import '../../styles/SideIcons.css'


const index = () => {
  return (
    <div className="sideIcons">
      <div className="sideIcons__top">
        <img
          src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Calendar.max-1100x1100.png"
          alt="google calender"
        />
        <img
          src="https://www.google.com/images/icons/product/keep-512.png"
          alt="google keep"
        />
        <img
          src="https://play-lh.googleusercontent.com/62OzNxLonba70XxMFP3X3dsdNS9lvG2xf5TqfhYDaw9iFn5as9gVSU23ExfCLoZXkMWA"
          alt="google tasks"
        />
      </div>
      <hr />
      <div className="sideIcons__plusIcon">
        <AddIcon />
      </div>
    </div>
  );
}

export default index
