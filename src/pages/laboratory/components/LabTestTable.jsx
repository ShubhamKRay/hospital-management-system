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
} from "@mui/material";

import { Search, Visibility, Edit, Delete } from "@mui/icons-material";

import labTestData from "../data/labTestData";

function LabTestTable() {
  const navigate = useNavigate();

  const [tests, setTests] = useState(labTestData);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("");

  const [categoryFilter, setCategoryFilter] = useState("");

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredTests = tests.filter((test) => {
    const searchMatch =
      test.patient.toLowerCase().includes(search.toLowerCase()) ||
      test.testName.toLowerCase().includes(search.toLowerCase());

    const statusMatch = statusFilter === "" || test.status === statusFilter;

    const categoryMatch =
      categoryFilter === "" || test.category === categoryFilter;

    return searchMatch && statusMatch && categoryMatch;
  });

  const handleDelete = (id) => {
    const updated = tests.filter((test) => test.id !== id);

    setTests(updated);
  };

  const pageData = filteredTests.slice(
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
          placeholder="Search patient or test..."
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
          label="Category"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          sx={{
            width: 200,
          }}
        >
          <MenuItem value="">All</MenuItem>

          <MenuItem value="Pathology">Pathology</MenuItem>

          <MenuItem value="Radiology">Radiology</MenuItem>
        </TextField>

        <TextField
          select
          label="Status"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          sx={{
            width: 200,
          }}
        >
          <MenuItem value="">All</MenuItem>

          <MenuItem value="Completed">Completed</MenuItem>

          <MenuItem value="Pending">Pending</MenuItem>
        </TextField>

        <Button
          variant="outlined"
          onClick={() => {
            setSearch("");

            setStatusFilter("");

            setCategoryFilter("");

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

              <TableCell>Test Name</TableCell>

              <TableCell>Category</TableCell>

              <TableCell>Doctor</TableCell>

              <TableCell>Date</TableCell>

              <TableCell>Status</TableCell>

              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {pageData.map((test) => (
              <TableRow key={test.id}>
                <TableCell>{test.patient}</TableCell>

                <TableCell>{test.testName}</TableCell>

                <TableCell>{test.category}</TableCell>

                <TableCell>{test.doctor}</TableCell>

                <TableCell>{test.date}</TableCell>

                <TableCell>
                  <Chip
                    label={test.status}
                    color={test.status === "Completed" ? "success" : "warning"}
                  />
                </TableCell>

                <TableCell align="center">
                  <IconButton
                    color="primary"
                    onClick={() => navigate(`/laboratory/view/${test.id}`)}
                  >
                    <Visibility />
                  </IconButton>

                  <IconButton
                    color="warning"
                    onClick={() => navigate(`/laboratory/edit/${test.id}`)}
                  >
                    <Edit />
                  </IconButton>

                  <IconButton
                    color="error"
                    onClick={() => handleDelete(test.id)}
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
        count={filteredTests.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={(e, newPage) => setPage(newPage)}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));

          setPage(0);
        }}
      />
    </Paper>
  );
}

export default LabTestTable;
