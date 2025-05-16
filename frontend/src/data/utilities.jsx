// src/data/utilities.js
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import WifiIcon from '@mui/icons-material/Wifi';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';

const utilities = [
  {
    title: "Electricity",
    util: <TipsAndUpdatesIcon className="text-green-600 text-4xl" />
  },
  {
    title: "Water",
    util: <WaterDropIcon className="text-blue-500 text-4xl" />
  },
  {
    title: "WiFi",
    util: <WifiIcon className="text-purple-500 text-4xl" />
  },
];

export default utilities;
