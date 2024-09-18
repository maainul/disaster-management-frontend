import React from "react";
import Login from "./pages/Login";
import Crisis from "./pages/Crisis";
import { DonateList } from "./pages/donate/DonateList";
import Volunteer from "./pages/Volunteer";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import PublicLayout from "./components/PublicLayout";
import VolunteerLayout from "./components/VolunteerLayout";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import Home from "./pages/Home";
import { DonateForm } from "./pages/donate/DonateForm";
import VolunteerForm from "./pages/volunteer/VolunteerForm";

const Router = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />
        <Route
          path="/login"
          element={
            <PublicLayout>
              <Login />
            </PublicLayout>
          }
        />
        <Route
          path="/donate"
          element={
            <PublicLayout>
              <DonateList />
            </PublicLayout>
          }
        />
        <Route
          path="/donate/crisis/:id"
          element={
            <PublicLayout>
              <DonateForm />
            </PublicLayout>
          }
        />
        <Route
          path="/crisis"
          element={
            <PublicLayout>
              <Crisis />
            </PublicLayout>
          }
        />
        <Route
          path="/volunteer"
          element={
            <PublicLayout>
              <VolunteerForm />
            </PublicLayout>
          }
        />
        <Route
          path="/dashboard/admin"
          element={
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/dashboard/volunteer"
          element={
            <VolunteerLayout>
              <VolunteerDashboard />
            </VolunteerLayout>
          }
        />
      </Routes>
    </>
  );
};

export default Router;
