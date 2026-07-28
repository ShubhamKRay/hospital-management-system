

function Sidebar() {
  return (
    <div
      style={{
        width: "240px",
        minHeight: "100vh",
        background: "#F4F6F8",
        padding: "20px",
      }}
    >
      <h3>Menu</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>Dashboard</li>
        <li>Patients</li>
        <li>Doctors</li>
        <li>Appointments</li>
      </ul>
    </div>
  );
}

export default Sidebar;