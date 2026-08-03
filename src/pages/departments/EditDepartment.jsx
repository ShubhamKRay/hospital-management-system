import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import DepartmentForm from "./components/DepartmentForm";

import departmentData from "./data/departmentData";

function EditDepartment() {
  const { id } = useParams();

  const department = departmentData.find((item) => item.id === Number(id));

  return (
    <MainLayout>
      <DepartmentForm defaultValues={department} mode="edit" />
    </MainLayout>
  );
}

export default EditDepartment;
