

import MainLayout from "../../layouts/MainLayout";
import { Box, Typography, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import DoctorTable from "./components/DoctorTable";
import DoctorStats from "./components/DoctorStats";
import doctorData from "./data/doctorData";


function DoctorList() {
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
          <Typography variant="h4" fontWeight="bold">
            Doctor Management
          </Typography>

          <Typography color="text.secondary">
            Manage all hospital doctors
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => navigate("/doctors/add")}
        >
          Add Doctor
        </Button>
      </Box>

      <>
     <DoctorStats doctors={doctorData} />

      <DoctorTable />
    </>
    </MainLayout>
  );
}

export default DoctorList;