import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import BillForm from "./components/BillForm";

import billData from "./data/billData";

function EditBill() {
  const { id } = useParams();

  const bill = billData.find((item) => item.id === Number(id));

  return (
    <MainLayout>
      <BillForm defaultValues={bill} mode="edit" />
    </MainLayout>
  );
}

export default EditBill;
