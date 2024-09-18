import React from "react";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";

const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminHeader />
      <main className="flex-grow">{children}</main>
      <AdminFooter />
    </>
  );
};

export default AdminLayout;
