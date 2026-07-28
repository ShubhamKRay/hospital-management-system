

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Dashboard
import Dashboard from "../pages/dashboard/Dashboard";

// Auth
import Login from "../pages/auth/Login";

// Patients
import PatientList from "../pages/patients/PatientList";
import AddPatient from "../pages/patients/AddPatient";
import EditPatient from "../pages/patients/EditPatient";
import ViewPatient from "../pages/patients/ViewPatient";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Dashboard */}
        <Route path="/" element={<Dashboard />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />

        {/* Patients */}
        <Route path="/patients" element={<PatientList />} />
        <Route path="/patients/add" element={<AddPatient />} />
        <Route path="/patients/view/:id" element={<ViewPatient />} />
        <Route path="/patients/edit/:id" element={<EditPatient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;