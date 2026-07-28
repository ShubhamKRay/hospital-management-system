import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  TextField,
  InputAdornment,
  Box,
} from "@mui/material";

import {
  Visibility,
  Edit,
  Delete,
  Search,
} from "@mui/icons-material";

import patientData from "../data/patientData";

function PatientTable() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const filteredPatients = patientData.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      {/* Search Bar */}
      <Box sx={{ p: 2 }}>
        <TextField
          fullWidth
          placeholder="Search patient by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Table */}
      <TableContainer>
        <Table>

          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Age</strong></TableCell>
              <TableCell><strong>Gender</strong></TableCell>
              <TableCell><strong>Disease</strong></TableCell>
              <TableCell><strong>Doctor</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell align="center">
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredPatients.map((patient) => (
              <TableRow key={patient.id} hover>

                <TableCell>{patient.id}</TableCell>

                <TableCell>{patient.name}</TableCell>

                <TableCell>{patient.age}</TableCell>

                <TableCell>{patient.gender}</TableCell>

                <TableCell>{patient.disease}</TableCell>

                <TableCell>{patient.doctor}</TableCell>

                <TableCell>
                  <Chip
                    label={patient.status}
                    size="small"
                    color={
                      patient.status === "Admitted"
                        ? "success"
                        : patient.status === "Discharged"
                        ? "error"
                        : "warning"
                    }
                  />
                </TableCell>

                <TableCell align="center">

                  <IconButton
                    color="primary"
                    onClick={() =>
                      navigate(`/patients/view/${patient.id}`)
                    }
                  >
                    <Visibility />
                  </IconButton>

                  <IconButton
                    color="success"
                    onClick={() =>
                      navigate(`/patients/edit/${patient.id}`)
                    }
                  >
                    <Edit />
                  </IconButton>

                  <IconButton
                    color="error"
                    onClick={() =>
                      alert(
                        `Delete Patient: ${patient.name}\n\n(Delete functionality will be implemented later.)`
                      )
                    }
                  >
                    <Delete />
                  </IconButton>

                </TableCell>

              </TableRow>
            ))}

            {filteredPatients.length === 0 && (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  No patient found.
                </TableCell>
              </TableRow>
            )}

          </TableBody>

        </Table>
      </TableContainer>
    </Paper>
  );
}

export default PatientTable;