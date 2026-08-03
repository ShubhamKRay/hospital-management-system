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

import DepartmentList from "../pages/departments/DepartmentList";
import AddDepartment from "../pages/departments/AddDepartment";
import EditDepartment from "../pages/departments/EditDepartment";
import ViewDepartment from "../pages/departments/ViewDepartment";

import LaboratoryList from "../pages/laboratory/LaboratoryList";
import AddLabTest from "../pages/laboratory/AddLabTest";
import EditLabTest from "../pages/laboratory/EditLabTest";
import ViewLabTest from "../pages/laboratory/ViewLabTest";

import PharmacyList from "../pages/pharmacy/PharmacyList";
import AddMedicine from "../pages/pharmacy/AddMedicine";
import EditMedicine from "../pages/pharmacy/EditMedicine";
import ViewMedicine from "../pages/pharmacy/ViewMedicine";

import BillingList from "../pages/billing/BillingList";
import AddBill from "../pages/billing/AddBill";
import EditBill from "../pages/billing/EditBill";
import ViewBill from "../pages/billing/ViewBill";

import Settings from "../pages/settings/Settings";

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

        {/*Departments*/}
        <Route path="/departments" element={<DepartmentList />} />
        <Route path="/departments/add" element={<AddDepartment />} />
        <Route path="/departments/edit/:id" element={<EditDepartment />} />
        <Route path="/departments/view/:id" element={<ViewDepartment />} />

        {/* Laboratory */}
        <Route path="/laboratory" element={<LaboratoryList />} />
        <Route path="/laboratory/add" element={<AddLabTest />} />
        <Route path="/laboratory/edit/:id" element={<EditLabTest />} />
        <Route path="/laboratory/view/:id" element={<ViewLabTest />} />

        {/* Pharmacy */}
        <Route path="/pharmacy" element={<PharmacyList />} />
        <Route path="/pharmacy/add" element={<AddMedicine />} />
        <Route path="/pharmacy/edit/:id" element={<EditMedicine />} />
        <Route path="/pharmacy/view/:id" element={<ViewMedicine />} />

        {/* Billing */}
        <Route path="/billing" element={<BillingList />} />
        <Route path="/billing/add" element={<AddBill />} />
        <Route path="/billing/edit/:id" element={<EditBill />} />
        <Route path="/billing/view/:id" element={<ViewBill />} />

        {/* Settings */}
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
