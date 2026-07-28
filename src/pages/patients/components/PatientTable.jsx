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

  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Snackbar,
  Alert,
  TablePagination,
  MenuItem,

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

  const [genderFilter, setGenderFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [doctorFilter, setDoctorFilter] = useState("");

  const [sortBy, setSortBy] = useState("");


  const [openDialog, setOpenDialog] = useState(false);

  const [selectedPatient, setSelectedPatient] = useState(null);

  const [snackbar, setSnackbar] = useState({
         open: false,
         message: "",
         severity: "success",
   });


  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [patients, setPatients] = useState(patientData);



  const filteredPatients = patients.filter((patient) => {

  const matchSearch = patient.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchGender =
    genderFilter === "" ||
    patient.gender === genderFilter;

  const matchStatus =
    statusFilter === "" ||
    patient.status === statusFilter;

  const matchDoctor =
    doctorFilter === "" ||
    patient.doctor === doctorFilter;

  return (
    matchSearch &&
    matchGender &&
    matchStatus &&
    matchDoctor
  );
});


const sortedPatients = [...filteredPatients].sort((a, b) => {

  if (sortBy === "nameAsc") {
    return a.name.localeCompare(b.name);
  }

  if (sortBy === "nameDesc") {
    return b.name.localeCompare(a.name);
  }

  if (sortBy === "ageAsc") {
    return a.age - b.age;
  }

  if (sortBy === "ageDesc") {
    return b.age - a.age;
  }

  return 0;

});



   const handleDeleteClick = (patient) => {
   setSelectedPatient(patient);
   setOpenDialog(true);
   };

  const handleCloseDialog = () => {
  setOpenDialog(false);
  setSelectedPatient(null);
 };



 const handleDeletePatient = () => {
  const updatedPatients = patients.filter(
    (patient) => patient.id !== selectedPatient.id
  );

  setPatients(updatedPatients);

  setSnackbar({
    open: true,
    message: "Patient deleted successfully.",
    severity: "success",
  });

  handleCloseDialog();
};


  return (

    <>

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
        placeholder="Search by patient name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
        startAdornment: (
      <InputAdornment position="start">
        <Search color="primary" />
      </InputAdornment>
     ),
    }}
         sx={{
            "& .MuiOutlinedInput-root": {
             borderRadius: 2,
        },
     }}
   />
</Box>


{/* Filters */}
<Box
  display="flex"
  gap={2}
  px={2}
  pb={2}
  flexWrap="wrap"
>
  <TextField
    select
    label="Gender"
    value={genderFilter}
    onChange={(e) => setGenderFilter(e.target.value)}
    sx={{ minWidth: 180 }}
  >
    <MenuItem value="">All</MenuItem>
    <MenuItem value="Male">Male</MenuItem>
    <MenuItem value="Female">Female</MenuItem>
  </TextField>

  <TextField
    select
    label="Status"
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
    sx={{ minWidth: 200 }}
  >
    <MenuItem value="">All</MenuItem>
    <MenuItem value="Admitted">Admitted</MenuItem>
    <MenuItem value="Discharged">Discharged</MenuItem>
    <MenuItem value="Under Treatment">Under Treatment</MenuItem>
  </TextField>

  <TextField
    select
    label="Doctor"
    value={doctorFilter}
    onChange={(e) => setDoctorFilter(e.target.value)}
    sx={{ minWidth: 220 }}
  >
    <MenuItem value="">All</MenuItem>
    <MenuItem value="Dr. Amit">Dr. Amit</MenuItem>
    <MenuItem value="Dr. Neha">Dr. Neha</MenuItem>
    <MenuItem value="Dr. Raj">Dr. Raj</MenuItem>
    <MenuItem value="Dr. Priya">Dr. Priya</MenuItem>
    <MenuItem value="Dr. Shivangi Yadav">
      Dr. Shivangi Yadav
    </MenuItem>
  </TextField>


<TextField
  select
  label="Sort By"
  value={sortBy}
  onChange={(e)=>{
    setSortBy(e.target.value);
    setPage(0);
  }}
  sx={{ minWidth:220 }}
>

<MenuItem value="">
  Default
</MenuItem>

<MenuItem value="nameAsc">
  Name A-Z
</MenuItem>

<MenuItem value="nameDesc">
  Name Z-A
</MenuItem>

<MenuItem value="ageAsc">
  Age Low - High
</MenuItem>

<MenuItem value="ageDesc">
  Age High - Low
</MenuItem>

</TextField>




<Button
  variant="outlined"
  color="secondary"
  sx={{
    height: 56,
  }}
  onClick={() => {
    setSearch("");
    setGenderFilter("");
    setStatusFilter("");
    setDoctorFilter("");
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

          <TableHead
            sx={{
             backgroundColor: "#f5f5f5",
             }}
            >
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
            {sortedPatients
            .slice(
                 page * rowsPerPage,
                 page * rowsPerPage + rowsPerPage
                )
                .map((patient) => (
              <TableRow
                       key={patient.id}
                       hover
                       sx={{
                       "&:hover": {
                       backgroundColor: "#fafafa",
                    },
                 }}
               >

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
                      onClick={() => handleDeleteClick(patient)}
                   >
                     <Delete />
                    </IconButton>

                </TableCell>

              </TableRow>
            ))}

            {sortedPatients.length === 0 && (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  No patient found.
                </TableCell>
              </TableRow>
            )}

          </TableBody>

        </Table>
      </TableContainer>


    <TablePagination
       component="div"
       count={filteredPatients.length}
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
    Delete Patient
  </DialogTitle>

  <DialogContent>

    <DialogContentText>

      Are you sure you want to delete

      <strong>
        {" "}
        {selectedPatient?.name}
        {" "}
      </strong>

      ?

    </DialogContentText>

  </DialogContent>

  <DialogActions>

    <Button
      onClick={handleCloseDialog}
    >
      Cancel
    </Button>

    <Button
      color="error"
      variant="contained"
      onClick={handleDeletePatient}
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

export default PatientTable;