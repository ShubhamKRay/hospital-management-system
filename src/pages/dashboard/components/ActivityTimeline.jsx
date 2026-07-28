

import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import {
  PersonAdd,
  EventAvailable,
  Medication,
  Receipt,
} from "@mui/icons-material";

const activities = [
  {
    id: 1,
    icon: <PersonAdd color="primary" />,
    title: "New Patient Registered",
    time: "10:00 AM",
  },
  {
    id: 2,
    icon: <EventAvailable color="success" />,
    title: "Appointment Booked",
    time: "11:15 AM",
  },
  {
    id: 3,
    icon: <Medication color="warning" />,
    title: "Medicine Issued",
    time: "12:30 PM",
  },
  {
    id: 4,
    icon: <Receipt color="secondary" />,
    title: "Invoice Generated",
    time: "01:20 PM",
  },
];

function ActivityTimeline() {
  return (
    <Paper
      elevation={3}
      sx={{
        mt: 3,
        p: 3,
        borderRadius: 3,
      }}
    >
      <Typography variant="h6" mb={2}>
        Activity Timeline
      </Typography>

      <List>
        {activities.map((activity) => (
          <div key={activity.id}>
            <ListItem>
              <ListItemIcon>
                {activity.icon}
              </ListItemIcon>

              <ListItemText
                primary={activity.title}
                secondary={activity.time}
              />
            </ListItem>

            <Divider />
          </div>
        ))}
      </List>
    </Paper>
  );
}

export default ActivityTimeline;