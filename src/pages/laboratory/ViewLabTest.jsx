import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import LabTestDetailsCard from "./components/LabTestDetailsCard";

import labTestData from "./data/labTestData";

function ViewLabTest() {
  const { id } = useParams();

  const labTest = labTestData.find((item) => item.id === Number(id));

  return (
    <MainLayout>
      <LabTestDetailsCard labTest={labTest} />
    </MainLayout>
  );
}

export default ViewLabTest;
