import React from "react";
import NewFile from "./NewFile";
import SideBarItem from "./SideBarItem";

import InsertDriveFileIcon from "@material-ui/icons/Storage";
import ImportantDevicesIcon from "@material-ui/icons/Storage";
import PeopleAltIcon from "@material-ui/icons/Storage";
import QueryBuilderIcon from "@material-ui/icons/Storage";
import StartBorderIcon from "@material-ui/icons/Storage";
import DeleteOutlineIcon from "@material-ui/icons/Storage";
import StorageIcon from "@material-ui/icons/Storage";
import "../../styles/Sidebar.css";

const Sidebar = () => {


  return (
    <div className="sidebar">
      <NewFile />

      <div className="sidebar__itemsContainer">
        <SideBarItem arrow icon={<InsertDriveFileIcon />} label={"My Drive"} />
        <SideBarItem
          arrow
          icon={<ImportantDevicesIcon />}
          label={"Computers"}
        />
        <SideBarItem icon={<PeopleAltIcon />} label={"Shared with me"} />
        <SideBarItem icon={<QueryBuilderIcon />} label={"Recent"} />
        <SideBarItem icon={<StartBorderIcon />} label={"Starred"} />
        <SideBarItem icon={<DeleteOutlineIcon />} label={"Bin"} />

        <hr />
        <SideBarItem icon={<StorageIcon />} label={"Storage"} />
      </div>
    </div>
  );
};

export default Sidebar;
