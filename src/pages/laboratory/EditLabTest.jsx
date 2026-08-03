import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import LabTestForm from "./components/LabTestForm";

import labTestData from "./data/labTestData";

function EditLabTest() {
  const { id } = useParams();

  const labTest = labTestData.find((item) => item.id === Number(id));

  return (
    <MainLayout>
      <LabTestForm defaultValues={labTest} mode="edit" />
    </MainLayout>
  );
}

export default EditLabTest;
