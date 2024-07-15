import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import { Switch } from "@mui/material";
import { useEffect, useState } from "react";
import { drawerOptions } from "../constants";

const DrawerComponent = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    applyTheme();
  }, [isDark]);

  const applyTheme = () => {
    document.documentElement.classList.toggle("dark", isDark);
  };

  return (
    <div className="w-[15rem]">
      <header className="px-8 pt-4">
        <p className="rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center w-10 h-10 p-2 font-semibold text-white">
          KR
        </p>
        <div className="info flex justify-between items-center py-4">
          <div>
            <p className="font-bold text-sm">Kritika Rajput</p>
            <p className="text-blue-500 text-sm">Set Emoji Status</p>
          </div>
          <ExpandMoreIcon />
        </div>
      </header>
      <hr />
      <div className="options px-8 py-4">
        {drawerOptions.map((item, index) => (
          <div key={index} className="option gap-4 py-2 flex items-center">
            {item.icon}
            <p className="font-semibold text-sm">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="theme px-8 flex justify-between items-center">
        <BedtimeOutlinedIcon />
        <p className="font-semibold text-sm">Night Mode</p>
        <Switch checked={isDark} onChange={toggleDarkMode} />
      </div>
    </div>
  );
};

export default DrawerComponent;
