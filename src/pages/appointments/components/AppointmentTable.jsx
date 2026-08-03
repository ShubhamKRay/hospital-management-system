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
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar,
  Alert,
  TablePagination,
  Button,
} from "@mui/material";

import { Search, Visibility, Edit, Delete } from "@mui/icons-material";

import appointmentData from "../data/appointmentData";

function AppointmentTable() {
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState(appointmentData);

  const [search, setSearch] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const filteredAppointments = appointments.filter((appointment) => {
    const matchSearch = appointment.patient
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchDepartment =
      departmentFilter === "" || appointment.department === departmentFilter;

    const matchStatus =
      statusFilter === "" || appointment.status === statusFilter;

    return matchSearch && matchDepartment && matchStatus;
  });

  const sortedAppointments = [...filteredAppointments].sort((a, b) => {
    switch (sortBy) {
      case "patientAsc":
        return a.patient.localeCompare(b.patient);

      case "patientDesc":
        return b.patient.localeCompare(a.patient);

      case "dateAsc":
        return new Date(a.date) - new Date(b.date);

      case "dateDesc":
        return new Date(b.date) - new Date(a.date);

      default:
        return 0;
    }
  });

  const handleDeleteClick = (appointment) => {
    setSelectedAppointment(appointment);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedAppointment(null);
  };

  const handleDeleteAppointment = () => {
    setAppointments((prev) =>
      prev.filter((item) => item.id !== selectedAppointment.id),
    );

    setSnackbar({
      open: true,
      message: "Appointment deleted successfully.",
      severity: "success",
    });

    handleCloseDialog();
  };

  return (
    <>
      <Paper elevation={3} sx={{ borderRadius: 3 }}>
        {/* Search */}

        <Box sx={{ p: 2 }}>
          <TextField
            fullWidth
            placeholder="Search Patient..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(0);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Filters */}

        <Box
          sx={{
            display: "flex",
            gap: 2,
            px: 2,
            pb: 2,
            flexWrap: "wrap",
          }}
        >
          <TextField
            select
            label="Department"
            value={departmentFilter}
            sx={{ minWidth: 200 }}
            onChange={(e) => {
              setDepartmentFilter(e.target.value);
              setPage(0);
            }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Cardiology">Cardiology</MenuItem>
            <MenuItem value="Neurology">Neurology</MenuItem>
            <MenuItem value="Orthopedics">Orthopedics</MenuItem>
          </TextField>

          <TextField
            select
            label="Status"
            value={statusFilter}
            sx={{ minWidth: 180 }}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setPage(0);
            }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Scheduled">Scheduled</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
            <MenuItem value="Cancelled">Cancelled</MenuItem>
          </TextField>

          <TextField
            select
            label="Sort By"
            value={sortBy}
            sx={{ minWidth: 220 }}
            onChange={(e) => {
              setSortBy(e.target.value);
              setPage(0);
            }}
          >
            <MenuItem value="">Default</MenuItem>
            <MenuItem value="patientAsc">Patient A-Z</MenuItem>
            <MenuItem value="patientDesc">Patient Z-A</MenuItem>
            <MenuItem value="dateAsc">Date ↑</MenuItem>
            <MenuItem value="dateDesc">Date ↓</MenuItem>
          </TextField>

          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              setSearch("");
              setDepartmentFilter("");
              setStatusFilter("");
              setSortBy("");
              setPage(0);
            }}
          >
            Reset Filters
          </Button>
        </Box>

        {/* Table */}

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Patient</TableCell>
                <TableCell>Doctor</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {sortedAppointments
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((appointment) => (
                  <TableRow key={appointment.id} hover>
                    <TableCell>{appointment.patient}</TableCell>

                    <TableCell>{appointment.doctor}</TableCell>

                    <TableCell>{appointment.department}</TableCell>

                    <TableCell>{appointment.date}</TableCell>

                    <TableCell>
                      <Chip
                        label={appointment.status}
                        color={
                          appointment.status === "Completed"
                            ? "success"
                            : appointment.status === "Cancelled"
                              ? "error"
                              : "warning"
                        }
                      />
                    </TableCell>

                    <TableCell align="center">
                      <IconButton
                        color="primary"
                        onClick={() =>
                          navigate(`/appointments/view/${appointment.id}`)
                        }
                      >
                        <Visibility />
                      </IconButton>

                      <IconButton
                        color="success"
                        onClick={() =>
                          navigate(`/appointments/edit/${appointment.id}`)
                        }
                      >
                        <Edit />
                      </IconButton>

                      <IconButton
                        color="error"
                        onClick={() => handleDeleteClick(appointment)}
                      >
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          component="div"
          count={sortedAppointments.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={(e, newPage) => setPage(newPage)}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(+e.target.value);
            setPage(0);
          }}
        />
      </Paper>

      {/* Delete Dialog */}

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Delete Appointment</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this appointment?
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>

          <Button
            color="error"
            variant="contained"
            onClick={handleDeleteAppointment}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() =>
          setSnackbar({
            ...snackbar,
            open: false,
          })
        }
      >
        <Alert severity={snackbar.severity} variant="filled">
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default AppointmentTable;
