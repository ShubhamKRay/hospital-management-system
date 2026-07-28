

import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const patients = [
  {
    id: 1,
    name: "ShubhPratap Yadav",
    disease: "Fever",
  },
  {
    id: 2,
    name: "Shivansh Porwal",
    disease: "Diabetes",
  },
  {
    id: 3,
    name: "Piyush Raut",
    disease: "Fracture",
  },
];

function RecentPatients() {
  return (
    <Paper sx={{ mt: 4, p: 3, borderRadius: 3 }}>
      <Typography variant="h6" mb={2}>
        Recent Patients
      </Typography>

      <List>
        {patients.map((patient) => (
          <div key={patient.id}>
            <ListItem>
              <ListItemText
                primary={patient.name}
                secondary={patient.disease}
              />
            </ListItem>

            <Divider />
          </div>
        ))}
      </List>
    </Paper>
  );
}

export default RecentPatients;