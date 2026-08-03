
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
  Button,
  Snackbar,
  Alert,
  TablePagination,

} from "@mui/material";

import {
  Visibility,
  Edit,
  Delete,
  Search,
} from "@mui/icons-material";

import { useState } from "react";
import doctorData from "../data/doctorData";
import { useNavigate } from "react-router-dom";



function DoctorTable() {

    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const [doctors, setDoctors] = useState(doctorData);

    const [sortBy, setSortBy] = useState("");

    const [page, setPage] = useState(0);

    const [rowsPerPage, setRowsPerPage] = useState(5);

    const [openDialog, setOpenDialog] = useState(false);

    const [selectedDoctor, setSelectedDoctor] = useState(null);

    const [snackbar, setSnackbar] = useState({
     open: false,
     message: "",
     severity: "success",
    });

    const [departmentFilter, setDepartmentFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState("");


  const filteredDoctors = doctors.filter((doctor) => {
  const matchSearch = doctor.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchDepartment =
    departmentFilter === "" ||
    doctor.department === departmentFilter;

  const matchStatus =
    statusFilter === "" ||
    doctor.status === statusFilter;

  return (
    matchSearch &&
    matchDepartment &&
    matchStatus
  );
});


const handleDeleteClick = (doctor) => {
  setSelectedDoctor(doctor);
  setOpenDialog(true);
};

const handleCloseDialog = () => {
  setOpenDialog(false);
  setSelectedDoctor(null);
};

const handleDeleteDoctor = () => {
  const updatedDoctors = doctors.filter(
    (doctor) => doctor.id !== selectedDoctor.id
  );

  setDoctors(updatedDoctors);

  setSnackbar({
    open: true,
    message: "Doctor deleted successfully.",
    severity: "success",
  });

  setPage(0);

  handleCloseDialog();
};




const sortedDoctors = [...filteredDoctors].sort((a, b) => {
  if (sortBy === "nameAsc") {
    return a.name.localeCompare(b.name);
  }

  if (sortBy === "nameDesc") {
    return b.name.localeCompare(a.name);
  }

  if (sortBy === "expAsc") {
    return a.experience - b.experience;
  }

  if (sortBy === "expDesc") {
    return b.experience - a.experience;
  }

  return 0;
});


  return (

    <>

    <Paper elevation={3} sx={{ borderRadius: 3 }}>

<Box sx={{ p: 2 }}>
  <TextField
    fullWidth
    placeholder="Search doctor by name..."
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




<Box
  sx={{
    display: "flex",
    gap: 2,
    px: 2,
    pb: 2,
    flexWrap: "wrap",
    alignItems: "center",
  }}
>
  <TextField
    select
    label="Department"
    value={departmentFilter}
    onChange={(e) => {
    setDepartmentFilter(e.target.value);
    setPage(0);
  }}
    sx={{ width: 220 }}
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
    onChange={(e) => {
    setStatusFilter(e.target.value);
    setPage(0);
  }}

    sx={{ width: 180 }}
  >
    <MenuItem value="">All</MenuItem>
    <MenuItem value="Available">Available</MenuItem>
    <MenuItem value="On Leave">On Leave</MenuItem>
  </TextField>

  <TextField
  select
  label="Sort By"
  value={sortBy}
  onChange={(e) => {
    setSortBy(e.target.value);
    setPage(0);
  }}
  sx={{ width: 220 }}
>
  <MenuItem value="">Default</MenuItem>
  <MenuItem value="nameAsc">Name A-Z</MenuItem>
  <MenuItem value="nameDesc">Name Z-A</MenuItem>
  <MenuItem value="expAsc">Experience Low-High</MenuItem>
  <MenuItem value="expDesc">Experience High-Low</MenuItem>
</TextField>

<Button
  variant="outlined"
  color="secondary"
  sx={{ height: 56 }}
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








      <TableContainer>
        <Table>

          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Specialization</strong></TableCell>
              <TableCell><strong>Department</strong></TableCell>
              <TableCell><strong>Experience</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell align="center">
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {sortedDoctors
            .slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                )
                .map((doctor) => (
              <TableRow
                key={doctor.id}
                hover
                sx={{
                  "&:hover": {
                    backgroundColor: "#fafafa",
                  },
                }}
              >
                <TableCell>{doctor.id}</TableCell>

                <TableCell>{doctor.name}</TableCell>

                <TableCell>{doctor.specialization}</TableCell>

                <TableCell>{doctor.department}</TableCell>

                <TableCell>
                  {doctor.experience} Years
                </TableCell>

                <TableCell>
                  <Chip
                    label={doctor.status}
                    color={
                      doctor.status === "Available"
                        ? "success"
                        : "warning"
                    }
                    size="small"
                  />
                </TableCell>

                <TableCell align="center">

                <IconButton
                    color="primary"
                    size="small"
                    onClick={() =>
                    navigate(`/doctors/view/${doctor.id}`)
                 }
              >
               <Visibility />
             </IconButton>

                 <IconButton
                    color="success"
                    size="small"
                    onClick={() =>
                    navigate(`/doctors/edit/${doctor.id}`)
                   }
                  >
                 <Edit />
                </IconButton>

                  <IconButton
                      color="error"
                      size="small"
                      onClick={() => handleDeleteClick(doctor)}
                    >
                    <Delete />
                  </IconButton>

                </TableCell>

              </TableRow>
            ))}

            {sortedDoctors.length === 0 && (
            <TableRow>
           <TableCell colSpan={7} align="center">
             No doctors found matching your search.
           </TableCell>
           </TableRow>
        )}
          </TableBody>

        </Table>
      </TableContainer>


    <TablePagination
          component="div"
          count={filteredDoctors.length}
          page={page}
          onPageChange={(event, newPage) => setPage(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(event) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
        }}
       rowsPerPageOptions={[5, 10, 25]}
    />

    </Paper>


<Dialog
  open={openDialog}
  onClose={handleCloseDialog}
>
  <DialogTitle>
    Doctor record deleted successfully.
  </DialogTitle>

  <DialogContent>
    <DialogContentText>
      Are you sure you want to delete
      <strong> {selectedDoctor?.name} </strong>?
    </DialogContentText>
  </DialogContent>

  <DialogActions>
    <Button onClick={handleCloseDialog}>
      Cancel
    </Button>

    <Button
      color="error"
      variant="contained"
      onClick={handleDeleteDoctor}
    >
      Delete
    </Button>
  </DialogActions>
</Dialog>


<Snackbar
  open={snackbar.open}
  autoHideDuration={3000}
  onClose={() =>
    setSnackbar({
      ...snackbar,
      open: false,
    })
  }
  anchorOrigin={{
    vertical: "bottom",
    horizontal: "right",
  }}
>
  <Alert
    severity={snackbar.severity}
    variant="filled"
    sx={{ width: "100%" }}
  >
    {snackbar.message}
  </Alert>
</Snackbar>


</>

  );
}

export default DoctorTable;