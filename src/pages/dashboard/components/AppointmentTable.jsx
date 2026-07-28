

import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const appointments = [
  {
    id: 1,
    patient: "ShubhPratap Yadav",
    doctor: "Dr. Shubhangi Yadav",
    time: "09:30 AM",
    status: "Scheduled",
  },
  {
    id: 2,
    patient: "Shivansh Porwal",
    doctor: "Dr. Neha",
    time: "10:15 AM",
    status: "Completed",
  },
  {
    id: 3,
    patient: "Piyush Raut",
    doctor: "Dr. Raj",
    time: "11:00 AM",
    status: "Pending",
  },
];

function AppointmentTable() {
  return (
    <Paper sx={{ mt: 4, p: 3, borderRadius: 3 }}>
      <Typography variant="h6" mb={2}>
        Today's Appointments
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Patient</TableCell>
              <TableCell>Doctor</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell>{appointment.patient}</TableCell>
                <TableCell>{appointment.doctor}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>{appointment.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default AppointmentTable;