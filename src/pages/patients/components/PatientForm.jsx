import {Paper,Typography,Grid,TextField,MenuItem,Button,Divider,Box,} from "@mui/material";
import { useForm } from "react-hook-form";


const genders = ["Male", "Female", "Other"];

const bloodGroups = [
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
];

const departments = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "General Medicine",
];

const doctors = [
  "Dr. Amit",
  "Dr. Neha",
  "Dr. Raj",
  "Dr. Priya",
];

function PatientForm({ patient, mode = "add" }) {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
     console.log(data);
   };

  return (
    <Paper sx={{ p: 4, borderRadius: 3 }}>

   <form onSubmit={handleSubmit(onSubmit)}>


      <Typography variant="h5" fontWeight="bold" mb={3}>
  {mode === "edit" ? "Edit Patient" : "Add New Patient"}
</Typography>

      <Divider sx={{ mb: 3 }} />

      <Typography variant="h6" mb={2}>
        Personal Information
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
               fullWidth
               label="First Name"
           {...register("firstName")}
            />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField fullWidth label="Last Name" />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField fullWidth type="number" label="Age" />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField select fullWidth label="Gender">
            {genders.map((gender) => (
              <MenuItem key={gender} value={gender}>
                {gender}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField select fullWidth label="Blood Group">
            {bloodGroups.map((group) => (
              <MenuItem key={group} value={group}>
                {group}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField fullWidth label="Mobile Number" />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField fullWidth label="Email Address" />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Address"
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h6" mb={2}>
        Medical Information
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField fullWidth label="Disease" />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField select fullWidth label="Department">
            {departments.map((department) => (
              <MenuItem key={department} value={department}>
                {department}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField select fullWidth label="Assigned Doctor">
            {doctors.map((doctor) => (
              <MenuItem key={doctor} value={doctor}>
                {doctor}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            type="date"
            label="Admission Date"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField select fullWidth label="Status">
            <MenuItem value="Admitted">Admitted</MenuItem>
            <MenuItem value="Discharged">Discharged</MenuItem>
            <MenuItem value="Under Treatment">Under Treatment</MenuItem>
          </TextField>
        </Grid>
      </Grid>

      <Box
        mt={4}
        display="flex"
        justifyContent="flex-end"
        gap={2}
      >
        <Button variant="outlined">
          Cancel
        </Button>

        <Button
            type="submit"
            variant="contained"
        >
          Save Patient
        </Button>
      </Box>




   </form>
    </Paper>
  );
}

export default PatientForm;