import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import AppointmentForm from "./components/AppointmentForm";

import appointmentData from "./data/appointmentData";

function EditAppointment() {
  const { id } = useParams();

  const appointment = appointmentData.find((item) => item.id === Number(id));

  return (
    <MainLayout>
      <AppointmentForm defaultValues={appointment} mode="edit" />
    </MainLayout>
  );
}

export default EditAppointment;
