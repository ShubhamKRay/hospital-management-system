import { Box, Typography, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import PatientTable from "./components/PatientTable";

function PatientList() {
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
            Patient Management
          </Typography>

          <Typography color="text.secondary">
            Manage all hospital patients
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => navigate("/patients/add")}
        >
          Add Patient
        </Button>
      </Box>

      <PatientTable />
    </MainLayout>
  );
}

export default PatientList;