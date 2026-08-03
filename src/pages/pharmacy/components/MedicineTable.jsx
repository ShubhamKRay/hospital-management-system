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

import medicineData from "../data/medicineData";

function MedicineTable() {
  const navigate = useNavigate();

  const [medicines, setMedicines] = useState(medicineData);

  const [search, setSearch] = useState("");

  const [categoryFilter, setCategoryFilter] = useState("");

  const [statusFilter, setStatusFilter] = useState("");

  const [sortBy, setSortBy] = useState("");

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredMedicines = medicines
    .filter((medicine) => {
      const searchMatch = medicine.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const categoryMatch =
        categoryFilter === "" || medicine.category === categoryFilter;

      const statusMatch =
        statusFilter === "" || medicine.status === statusFilter;

      return searchMatch && categoryMatch && statusMatch;
    })

    .sort((a, b) => {
      if (sortBy === "nameAsc") {
        return a.name.localeCompare(b.name);
      }

      if (sortBy === "nameDesc") {
        return b.name.localeCompare(a.name);
      }

      if (sortBy === "stockHigh") {
        return b.stock - a.stock;
      }

      if (sortBy === "priceHigh") {
        return b.price - a.price;
      }

      return 0;
    });

  const handleDelete = (id) => {
    const updated = medicines.filter((medicine) => medicine.id !== id);

    setMedicines(updated);
  };

  const paginatedMedicines = filteredMedicines.slice(
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
          placeholder="Search medicine..."
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
          sx={{ width: 200 }}
        >
          <MenuItem value="">All</MenuItem>

          <MenuItem value="Tablet">Tablet</MenuItem>

          <MenuItem value="Capsule">Capsule</MenuItem>

          <MenuItem value="Injection">Injection</MenuItem>
        </TextField>

        <TextField
          select
          label="Stock Status"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          sx={{ width: 200 }}
        >
          <MenuItem value="">All</MenuItem>

          <MenuItem value="Available">Available</MenuItem>

          <MenuItem value="Low Stock">Low Stock</MenuItem>

          <MenuItem value="Out of Stock">Out of Stock</MenuItem>
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

          <MenuItem value="stockHigh">Stock High</MenuItem>

          <MenuItem value="priceHigh">Price High</MenuItem>
        </TextField>

        <Button
          variant="outlined"
          onClick={() => {
            setSearch("");

            setCategoryFilter("");

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
              <TableCell>Medicine</TableCell>

              <TableCell>Category</TableCell>

              <TableCell>Manufacturer</TableCell>

              <TableCell>Stock</TableCell>

              <TableCell>Price</TableCell>

              <TableCell>Status</TableCell>

              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedMedicines.map((medicine) => (
              <TableRow key={medicine.id}>
                <TableCell>{medicine.name}</TableCell>

                <TableCell>{medicine.category}</TableCell>

                <TableCell>{medicine.manufacturer}</TableCell>

                <TableCell>{medicine.stock}</TableCell>

                <TableCell>₹ {medicine.price}</TableCell>

                <TableCell>
                  <Chip
                    label={medicine.status}
                    color={
                      medicine.status === "Available"
                        ? "success"
                        : medicine.status === "Low Stock"
                          ? "warning"
                          : "error"
                    }
                  />
                </TableCell>

                <TableCell align="center">
                  <IconButton
                    color="primary"
                    onClick={() => navigate(`/pharmacy/view/${medicine.id}`)}
                  >
                    <Visibility />
                  </IconButton>

                  <IconButton
                    color="warning"
                    onClick={() => navigate(`/pharmacy/edit/${medicine.id}`)}
                  >
                    <Edit />
                  </IconButton>

                  <IconButton
                    color="error"
                    onClick={() => handleDelete(medicine.id)}
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
        count={filteredMedicines.length}
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

export default MedicineTable;
