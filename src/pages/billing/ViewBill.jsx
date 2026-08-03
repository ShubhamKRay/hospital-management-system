import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import BillDetailsCard from "./components/BillDetailsCard";

import billData from "./data/billData";

function ViewBill() {
  const { id } = useParams();

  const bill = billData.find((item) => item.id === Number(id));

  return (
    <MainLayout>
      <BillDetailsCard bill={bill} />
    </MainLayout>
  );
}

export default ViewBill;
