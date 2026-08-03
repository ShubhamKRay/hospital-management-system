import MainLayout from "../../layouts/MainLayout";
import { Box, Typography, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import AppointmentTable from "./components/AppointmentTable";

function AppointmentList() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Appointment Management
          </Typography>

          <Typography color="text.secondary">
            Manage all appointments
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => navigate("/appointments/add")}
        >
          Add Appointment
        </Button>
      </Box>

      <AppointmentTable />
    </MainLayout>
  );
}

export default AppointmentList;
