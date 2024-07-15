import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
export const drawerOptions = [
  {
    label: "New Group",
    icon: <PeopleAltOutlinedIcon />,
  },
  {
    label: "New Channel",
    icon: <CampaignOutlinedIcon className="" />,
  },
  {
    label: "Contacts",
    icon: <AccountCircleOutlinedIcon />,
  },
  {
    label: "Calls",
    icon: <CallOutlinedIcon />,
  },
  {
    label: "Saved Messages",
    icon: <BookmarkBorderOutlinedIcon />,
  },
  {
    label: "Settings",
    icon: <SettingsOutlinedIcon />,
  },
];
