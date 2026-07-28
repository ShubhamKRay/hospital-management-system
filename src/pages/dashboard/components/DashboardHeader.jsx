

import { Box, Typography } from "@mui/material";

function DashboardHeader() {
  return (
    <Box mb={4}>
      <Typography variant="h4" fontWeight="bold">
        Dashboard
      </Typography>

      <Typography variant="body1" color="text.secondary">
        Welcome back! Here's what's happening in your hospital today.
      </Typography>
    </Box>
  );
}

export default DashboardHeader;