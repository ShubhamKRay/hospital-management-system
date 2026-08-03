import MainLayout from "../../layouts/MainLayout";

import { Box, Typography, Button } from "@mui/material";

import { Add } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

import DepartmentTable from "./components/DepartmentTable";

function DepartmentList() {
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
            Department Management
          </Typography>

          <Typography color="text.secondary">
            Manage all hospital departments
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => navigate("/departments/add")}
        >
          Add Department
        </Button>
      </Box>

      <DepartmentTable />
    </MainLayout>
  );
}

export default DepartmentList;
