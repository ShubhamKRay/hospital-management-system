


import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import PatientDetailsCard from "./components/PatientDetailsCard";

import patientData from "./data/patientData";

function ViewPatient() {
  const { id } = useParams();

  const patient = patientData.find(
    (item) => item.id === Number(id)
  );

  return (
    <MainLayout>
      <PatientDetailsCard patient={patient} />
    </MainLayout>
  );
}

export default ViewPatient;