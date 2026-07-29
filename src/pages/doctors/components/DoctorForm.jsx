import {
  Paper,
  Typography,
  Divider,
  Grid,
  TextField,
  MenuItem,
  Button,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import doctorData from "../data/doctorData";

const genders = ["Male", "Female", "Other"];

const departments = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "General Medicine",
];

const specializations = [
  "Cardiologist",
  "Neurologist",
  "Orthopedic Surgeon",
  "General Physician",
];

const statusList = ["Available", "Busy", "On Leave"];

function DoctorForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "",
    specialization: "",
    department: "",
    experience: "",
    qualification: "",
    consultationFee: "",
    availableTime: "",
    status: "",
    address: "",
  });

  useEffect(() => {
    if (id) {
      const doctor = doctorData.find((doctor) => doctor.id === Number(id));

      if (doctor) {
        setFormData(doctor);
      }
    }
  }, [id]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Doctor name is required";
    }

    if (!formData.specialization) {
      newErrors.specialization = "Select specialization";
    }

    if (!formData.department) {
      newErrors.department = "Select department";
    }

    if (!formData.experience) {
      newErrors.experience = "Enter experience";
    }

    if (!formData.status) {
      newErrors.status = "Select status";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <>
      <Paper sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h5" fontWeight="bold" mb={3}>
          {id ? "Edit Doctor" : "Add New Doctor"}
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Typography variant="h6" mb={2}>
          Personal Information
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Full Name"
              value={formData.name}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  name: e.target.value,
                });

                setErrors({
                  ...errors,
                  name: "",
                });
              }}
              error={!!errors.name}
              helperText={errors.name}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Mobile Number"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  mobile: e.target.value,
                })
              }
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Gender"
              value={formData.gender}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  gender: e.target.value,
                })
              }
            >
              <MenuItem value="">Select Gender</MenuItem>

              {genders.map((gender) => (
                <MenuItem key={gender} value={gender}>
                  {gender}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h6" mb={2}>
          Professional Information
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Specialization"
              value={formData.specialization}
              error={!!errors.specialization}
              helperText={errors.specialization}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  specialization: e.target.value,
                })
              }
            >
              <MenuItem value="">Select Specialization</MenuItem>

              {specializations.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Department"
              value={formData.department}
              error={!!errors.department}
              helperText={errors.department}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  department: e.target.value,
                })
              }
            >
              <MenuItem value="">Select Department</MenuItem>

              {departments.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              type="number"
              label="Experience (Years)"
              value={formData.experience}
              error={!!errors.experience}
              helperText={errors.experience}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  experience: e.target.value,
                })
              }
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Qualification"
              value={formData.qualification}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  qualification: e.target.value,
                })
              }
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              type="number"
              label="Consultation Fee"
              value={formData.consultationFee}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  consultationFee: e.target.value,
                })
              }
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Available Time"
              placeholder="10:00 AM - 5:00 PM"
              value={formData.availableTime}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  availableTime: e.target.value,
                })
              }
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              select
              fullWidth
              label="Status"
              value={formData.status}
              error={!!errors.status}
              helperText={errors.status}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  status: e.target.value,
                })
              }
            >
              <MenuItem value="">Select Status</MenuItem>

              {statusList.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Address"
              value={formData.address}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: e.target.value,
                })
              }
            />
          </Grid>
        </Grid>

        <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
          <Button variant="outlined" onClick={() => navigate("/doctors")}>
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={() => {
              if (!validateForm()) return;

              console.log(formData);

              setErrors({});

              setSnackbar(true);

              setTimeout(() => {
                navigate("/doctors");
              }, 1000);
            }}
          >
            {id ? "Update Doctor" : "Save Doctor"}
          </Button>
        </Box>
      </Paper>

      <Snackbar
        open={snackbar}
        autoHideDuration={3000}
        onClose={() => setSnackbar(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert severity="success" variant="filled">
          {id ? "Doctor updated successfully." : "Doctor added successfully."}
        </Alert>
      </Snackbar>
    </>
  );
}

export default DoctorForm;
