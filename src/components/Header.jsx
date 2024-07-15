import MenuIcon from "@mui/icons-material/Menu";
import { Button, Drawer } from "@mui/material";
import DrawerComponent from "./DrawerComponent";
import { useState } from "react";
const Header = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
  return (
    <div className=" flex items-center p-2 gap-1">
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon className=" text-gray-400" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerComponent />
      </Drawer>
      <div className="search w-full">
        <input
          type="text"
          placeholder="Search"
          className=" bg-gray-200 ps-4 text-sm p-2 rounded-full w-full "
        />
      </div>
    </div>
  );
};

export default Header;
