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

import billData from "../data/billData";

function BillTable() {
  const navigate = useNavigate();

  const [bills, setBills] = useState(billData);

  const [search, setSearch] = useState("");

  const [departmentFilter, setDepartmentFilter] = useState("");

  const [statusFilter, setStatusFilter] = useState("");

  const [sortBy, setSortBy] = useState("");

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredBills = bills

    .filter((bill) => {
      const searchMatch = bill.patient
        .toLowerCase()
        .includes(search.toLowerCase());

      const departmentMatch =
        departmentFilter === "" || bill.department === departmentFilter;

      const statusMatch = statusFilter === "" || bill.status === statusFilter;

      return searchMatch && departmentMatch && statusMatch;
    })

    .sort((a, b) => {
      if (sortBy === "amountHigh") {
        return b.amount - a.amount;
      }

      if (sortBy === "amountLow") {
        return a.amount - b.amount;
      }

      if (sortBy === "patientAsc") {
        return a.patient.localeCompare(b.patient);
      }

      return 0;
    });

  const handleDelete = (id) => {
    setBills(bills.filter((bill) => bill.id !== id));
  };

  const paginatedBills = filteredBills.slice(
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
      <Box sx={{ p: 2 }}>
        <TextField
          fullWidth
          placeholder="Search patient bill..."
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
        }}
      >
        <TextField
          select
          label="Department"
          value={departmentFilter}
          onChange={(e) => setDepartmentFilter(e.target.value)}
          sx={{ width: 220 }}
        >
          <MenuItem value="">All</MenuItem>

          <MenuItem value="Cardiology">Cardiology</MenuItem>

          <MenuItem value="Neurology">Neurology</MenuItem>

          <MenuItem value="Orthopedics">Orthopedics</MenuItem>
        </TextField>

        <TextField
          select
          label="Payment Status"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          sx={{ width: 200 }}
        >
          <MenuItem value="">All</MenuItem>

          <MenuItem value="Paid">Paid</MenuItem>

          <MenuItem value="Pending">Pending</MenuItem>
        </TextField>

        <TextField
          select
          label="Sort By"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          sx={{ width: 200 }}
        >
          <MenuItem value="">Default</MenuItem>

          <MenuItem value="patientAsc">Patient A-Z</MenuItem>

          <MenuItem value="amountHigh">Amount High</MenuItem>

          <MenuItem value="amountLow">Amount Low</MenuItem>
        </TextField>

        <Button
          variant="outlined"
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
          <TableHead>
            <TableRow>
              <TableCell>Patient</TableCell>

              <TableCell>Doctor</TableCell>

              <TableCell>Department</TableCell>

              <TableCell>Amount</TableCell>

              <TableCell>Payment</TableCell>

              <TableCell>Status</TableCell>

              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedBills.map((bill) => (
              <TableRow key={bill.id}>
                <TableCell>{bill.patient}</TableCell>

                <TableCell>{bill.doctor}</TableCell>

                <TableCell>{bill.department}</TableCell>

                <TableCell>₹ {bill.amount}</TableCell>

                <TableCell>{bill.paymentMethod}</TableCell>

                <TableCell>
                  <Chip
                    label={bill.status}
                    color={bill.status === "Paid" ? "success" : "warning"}
                  />
                </TableCell>

                <TableCell align="center">
                  <IconButton
                    color="primary"
                    onClick={() => navigate(`/billing/view/${bill.id}`)}
                  >
                    <Visibility />
                  </IconButton>

                  <IconButton
                    color="warning"
                    onClick={() => navigate(`/billing/edit/${bill.id}`)}
                  >
                    <Edit />
                  </IconButton>

                  <IconButton
                    color="error"
                    onClick={() => handleDelete(bill.id)}
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
        count={filteredBills.length}
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

export default BillTable;
