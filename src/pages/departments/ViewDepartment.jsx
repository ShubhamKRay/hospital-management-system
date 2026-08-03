import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import DepartmentDetailsCard from "./components/DepartmentDetailsCard";

import departmentData from "./data/departmentData";

function ViewDepartment() {
  const { id } = useParams();

  const department = departmentData.find((item) => item.id === Number(id));

  return (
    <MainLayout>
      <DepartmentDetailsCard department={department} />
    </MainLayout>
  );
}

export default ViewDepartment;
