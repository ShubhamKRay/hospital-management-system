import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import MedicineForm from "./components/MedicineForm";

import medicineData from "./data/medicineData";

function EditMedicine() {
  const { id } = useParams();

  const medicine = medicineData.find((item) => item.id === Number(id));

  return (
    <MainLayout>
      <MedicineForm defaultValues={medicine} mode="edit" />
    </MainLayout>
  );
}

export default EditMedicine;
