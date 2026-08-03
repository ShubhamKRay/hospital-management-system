import MainLayout from "../../layouts/MainLayout";

import { Box, Typography, Tabs, Tab } from "@mui/material";

import { useState } from "react";

import HospitalSettings from "./components/HospitalSettings";
import ProfileSettings from "./components/ProfileSettings";

function Settings() {
  const [tab, setTab] = useState(0);

  return (
    <MainLayout>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Settings
      </Typography>

      <Box>
        <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)}>
          <Tab label="Hospital Settings" />

          <Tab label="Profile Settings" />
        </Tabs>

        <Box mt={3}>
          {tab === 0 ? <HospitalSettings /> : <ProfileSettings />}
        </Box>
      </Box>
    </MainLayout>
  );
}

export default Settings;
