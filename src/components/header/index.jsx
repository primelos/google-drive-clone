import React from "react";
import GDriveLogo from "../../media/g-drive.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import "../../styles/Header.css";
const Header = ({ userPhoto}) => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={GDriveLogo} alt="google drive icon" />
        <span>Drive</span>
      </div>
      <div className="header__searchContainer">
        <div className="header__searchBar">
          <SearchIcon />
          <input type="text" placeholder="Search in Drive" />
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="header__icons">
        <span>
          <HelpOutlineIcon />
          <SettingsIcon />
        </span>
        <div>
          <AppsIcon />
          <img src={userPhoto} alt="user photo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
