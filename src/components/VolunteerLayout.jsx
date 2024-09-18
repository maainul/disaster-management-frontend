import React from "react";
import VolunteerHeader from "./VolunteerHeader";
import VolunteerFooter from "./VolunteerFooter";

const VolunteerLayout = ({ children }) => {
  return (
    <>
      <VolunteerHeader />
      <main>{children}</main>
      <VolunteerFooter />
    </>
  );
};

export default VolunteerLayout;
