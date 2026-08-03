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
  Button,
  TablePagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

import { Search, Visibility, Edit, Delete } from "@mui/icons-material";

import departmentData from "../data/departmentData";

function DepartmentTable() {
  const navigate = useNavigate();

  const [departments, setDepartments] = useState(departmentData);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("");

  const [sortBy, setSortBy] = useState("");

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [openDialog, setOpenDialog] = useState(false);

  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const filteredDepartments = departments
    .filter((department) => {
      const searchMatch = department.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const statusMatch =
        statusFilter === "" || department.status === statusFilter;

      return searchMatch && statusMatch;
    })
    .sort((a, b) => {
      if (sortBy === "nameAsc") {
        return a.name.localeCompare(b.name);
      }

      if (sortBy === "nameDesc") {
        return b.name.localeCompare(a.name);
      }

      if (sortBy === "doctorDesc") {
        return b.totalDoctors - a.totalDoctors;
      }

      if (sortBy === "patientDesc") {
        return b.totalPatients - a.totalPatients;
      }

      return 0;
    });

  const handleDeleteClick = (department) => {
    setSelectedDepartment(department);

    setOpenDialog(true);
  };

  const handleDelete = () => {
    const updated = departments.filter(
      (department) => department.id !== selectedDepartment.id,
    );

    setDepartments(updated);

    setOpenDialog(false);

    setSelectedDepartment(null);
  };

  const handleReset = () => {
    setSearch("");

    setStatusFilter("");

    setSortBy("");

    setPage(0);
  };

  const paginatedDepartments = filteredDepartments.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 3,
      }}
    >
      {/* Search */}

      <Box sx={{ p: 2 }}>
        <TextField
          fullWidth
          placeholder="Search department..."
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
          label="Status"
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);

            setPage(0);
          }}
          sx={{ width: 200 }}
        >
          <MenuItem value="">All</MenuItem>

          <MenuItem value="Active">Active</MenuItem>

          <MenuItem value="Inactive">Inactive</MenuItem>
        </TextField>

        <TextField
          select
          label="Sort By"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          sx={{ width: 220 }}
        >
          <MenuItem value="">Default</MenuItem>

          <MenuItem value="nameAsc">Name A-Z</MenuItem>

          <MenuItem value="nameDesc">Name Z-A</MenuItem>

          <MenuItem value="doctorDesc">Most Doctors</MenuItem>

          <MenuItem value="patientDesc">Most Patients</MenuItem>
        </TextField>

        <Button variant="outlined" color="primary" onClick={handleReset}>
          Reset Filters
        </Button>
      </Box>

      {/* Table */}

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Department</TableCell>

              <TableCell>Head Doctor</TableCell>

              <TableCell>Doctors</TableCell>

              <TableCell>Patients</TableCell>

              <TableCell>Status</TableCell>

              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedDepartments.map((department) => (
              <TableRow key={department.id}>
                <TableCell>{department.name}</TableCell>

                <TableCell>{department.head}</TableCell>

                <TableCell>{department.totalDoctors}</TableCell>

                <TableCell>{department.totalPatients}</TableCell>

                <TableCell>
                  <Chip
                    label={department.status}
                    color={department.status === "Active" ? "success" : "error"}
                  />
                </TableCell>

                <TableCell align="center">
                  <IconButton
                    color="primary"
                    onClick={() =>
                      navigate(`/departments/view/${department.id}`)
                    }
                  >
                    <Visibility />
                  </IconButton>

                  <IconButton
                    color="warning"
                    onClick={() =>
                      navigate(`/departments/edit/${department.id}`)
                    }
                  >
                    <Edit />
                  </IconButton>

                  <IconButton
                    color="error"
                    onClick={() => handleDeleteClick(department)}
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
        count={filteredDepartments.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={(e, newPage) => setPage(newPage)}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));

          setPage(0);
        }}
      />

      {/* Delete Dialog */}

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Delete Department</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete {selectedDepartment?.name}?
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>

          <Button color="error" onClick={handleDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}

export default DepartmentTable;
