import {
  Dashboard,
  People,
  Person,
  Event,
  Apartment,
  LocalHospital,
  Science,
  Medication,
  ReceiptLong,
  Settings,
} from "@mui/icons-material";

const menuItems = [
  {
    title: "Dashboard",
    icon: Dashboard,
    path: "/",
  },
  {
    title: "Patients",
    icon: People,
    path: "/patients",
  },
  {
    title: "Doctors",
    icon: Person,
    path: "/doctors",
  },
  {
    title: "Appointments",
    icon: Event,
    path: "/appointments",
  },
  {
    title: "Departments",
    icon: Apartment,
    path: "/departments",
  },
  {
    title: "Laboratory",
    icon: Science,
    path: "/laboratory",
  },
  {
    title: "Pharmacy",
    icon: Medication,
    path: "/pharmacy",
  },
  {
    title: "Billing",
    icon: ReceiptLong,
    path: "/billing",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default menuItems;
