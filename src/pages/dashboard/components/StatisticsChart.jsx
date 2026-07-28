

import { Paper, Typography, Box } from "@mui/material";

function StatisticsChart() {
  return (
    <Paper
      elevation={3}
      sx={{
        mt: 4,
        p: 3,
        borderRadius: 3,
      }}
    >
      <Typography variant="h6" mb={2}>
        Patient Statistics
      </Typography>

      <Box
        sx={{
          height: 300,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "gray",
          border: "2px dashed #ccc",
          borderRadius: 2,
        }}
      >
        Chart Coming Soon
      </Box>
    </Paper>
  );
}

export default StatisticsChart;