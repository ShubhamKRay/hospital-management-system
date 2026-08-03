import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import MedicineDetailsCard from "./components/MedicineDetailsCard";

import medicineData from "./data/medicineData";

function ViewMedicine() {
  const { id } = useParams();

  const medicine = medicineData.find((item) => item.id === Number(id));

  return (
    <MainLayout>
      <MedicineDetailsCard medicine={medicine} />
    </MainLayout>
  );
}

export default ViewMedicine;
