

import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import PatientForm from "./components/PatientForm";
import patientData from "./data/patientData";

function EditPatient() {
  const { id } = useParams();

  const patient = patientData.find(
    (item) => item.id === Number(id)
  );

  return (
    <MainLayout>
      <PatientForm patient={patient} mode="edit" />
    </MainLayout>
  );
}

export default EditPatient;