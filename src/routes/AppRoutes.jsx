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

import DoctorList from "../pages/doctors/DoctorList";
import AddDoctor from "../pages/doctors/AddDoctor";
import EditDoctor from "../pages/doctors/EditDoctor";
import ViewDoctor from "../pages/doctors/ViewDoctor";

import AppointmentList from "../pages/appointments/AppointmentList";
import AddAppointment from "../pages/appointments/AddAppointment";
import EditAppointment from "../pages/appointments/EditAppointment";
import ViewAppointment from "../pages/appointments/ViewAppointment";

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

        {/* Doctors */}
        <Route path="/doctors" element={<DoctorList />} />
        <Route path="/doctors/add" element={<AddDoctor />} />
        <Route path="/doctors/edit/:id" element={<EditDoctor />} />
        <Route path="/doctors/view/:id" element={<ViewDoctor />} />

        {/*Appointments*/}
        <Route path="/appointments" element={<AppointmentList />} />
        <Route path="/appointments/add" element={<AddAppointment />} />
        <Route path="/appointments/edit/:id" element={<EditAppointment />} />
        <Route path="/appointments/view/:id" element={<ViewAppointment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
