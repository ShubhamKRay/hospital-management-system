import { Box, Typography, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import PatientTable from "./components/PatientTable";

import PatientStats from "./components/PatientStats";
import patientData from "./data/patientData";



function PatientList() {
  const navigate = useNavigate();

  return (
    <MainLayout>
   <Box
  display="flex"
  justifyContent="space-between"
  alignItems="center"
  mb={4}
>
  <Box>
    <Typography
      variant="h4"
      fontWeight="bold"
      gutterBottom
    >
      Patient Management
    </Typography>

    <Typography
      variant="body1"
      color="text.secondary"
    >
      Manage hospital patients, records and treatments.
    </Typography>
  </Box>

  <Button
    variant="contained"
    size="large"
    startIcon={<Add />}
    onClick={() => navigate("/patients/add")}
    sx={{
      textTransform: "none",
      borderRadius: 2,
      px: 3,
      py: 1,
      fontWeight: 600,
    }}
  >
    Add Patient
  </Button>
</Box>

<PatientStats patients={patientData} />

<PatientTable />
    </MainLayout>
  );
}

export default PatientList;