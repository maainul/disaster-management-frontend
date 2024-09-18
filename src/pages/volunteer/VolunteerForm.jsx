import React, { useState } from "react";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import axios from "axios";
import FormValidationErrorMsg from "../../components/FormValidationErrorMsg";
import { toast } from "react-toastify";

const VolunteerForm = () => {
  const [volunteerData, setVolunteerData] = useState({
    name: "",
    phoneNumber:"",
    emergencyPhoneNumber: "",
    email: "",
    facebookIdLink: "",
    nidNumber: "",
    educationalInformation: "",
    occupation: "",
    voluntaryWorkInterest: "",
    specialSkills: "",
    permanentAddress: "",
    districtUpazilaPermanent: "",
    currentAddress: "",
    districtUpazilaCurrent: "",
  });

  const [errorMsg, setErrorMsg] = useState([]);

  const handleChange = (e) => {
    setVolunteerData({
      ...volunteerData,
      [e.target.id]: e.target.value,
    });
  };

  // Submit form data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/volunteers/register", {
        ...volunteerData,
      });
      toast.success("Volunteer Added successfully");
      setVolunteerData({
        name: "",
        phoneNumber: "",
        emergencyPhoneNumber: "",
        email: "",
        facebookIdLink: "",
        nidNumber: "",
        educationalInformation: "",
        occupation: "",
        voluntaryWorkInterest: "",
        specialSkills: "",
        permanentAddress: "",
        districtUpazilaPermanent: "",
        currentAddress: "",
        districtUpazilaCurrent: "",
      });
    } catch (error) {
      console.log(error);
      setErrorMsg(error.response.data.error);
      toast.error("Error in Volunteer");
    }
  };

  return (
    <>
      <div className="mt-20 bg-gray-50">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-6 p-4">
            <div>
              <InputField
                label="Full Name"
                type="text"
                id="name"
                onChange={handleChange}
                value={volunteerData.name}
                placeholder="Please Enter Your Name"
              />
              <FormValidationErrorMsg errorMsg={errorMsg} label={"Name"} />
              <InputField
                label="Phone Number"
                type="text"
                id="phoneNumber"
                onChange={handleChange}
                value={volunteerData.phoneNumber}
                placeholder="Please Enter Phone Number"
              />{" "}
              <FormValidationErrorMsg
                errorMsg={errorMsg}
                label={"Phone Number"}
              />
              <InputField
                label="Emergency Phone Number"
                type="text"
                id="emergencyPhoneNumber"
                onChange={handleChange}
                value={volunteerData.emergencyPhoneNumber}
                placeholder="Please Enter Emergency Phone Number"
              />
              <FormValidationErrorMsg
                errorMsg={errorMsg}
                label={"Emergency Phone Number"}
              />
              <InputField
                label="Email"
                type="text"
                id="email"
                onChange={handleChange}
                value={volunteerData.email}
                placeholder="Please Enter Your Email"
              />
              <FormValidationErrorMsg errorMsg={errorMsg} label={"Email"} />
              <InputField
                label="Facebook Id Link"
                type="text"
                id="facebookIdLink" // Change id to match the key in the state (donorName)
                onChange={handleChange}
                value={volunteerData.facebookIdLink}
                placeholder="Please Enter Your Facebook Id Link"
              />
              <FormValidationErrorMsg
                errorMsg={errorMsg}
                label={"Facebook ID Link"}
              />
              <InputField
                label="NID"
                type="text"
                id="nidNumber" // Change id to match the key in the state (donorName)
                onChange={handleChange}
                value={volunteerData.nidNumber}
                placeholder="Please Enter Your NID Number"
              />
              <InputField
                label="Educational Information"
                type="text"
                id="educationalInformation"
                onChange={handleChange}
                value={volunteerData.educationalInformation}
                placeholder="Please Enter Your Educational Information"
              />
            </div>
            <div>
              <InputField
                label="Occupation"
                type="text"
                id="occupation"
                onChange={handleChange}
                value={volunteerData.occupation}
                placeholder="Please Enter Your Occupation"
              />
              <InputField
                label="Voluntary Work Interest"
                type="text"
                id="voluntaryWorkInterest"
                onChange={handleChange}
                value={volunteerData.voluntaryWorkInterest}
                placeholder="Please Enter Your Voluntary Work Interest"
              />
              <InputField
                label="Special Skills"
                type="text"
                id="specialSkills"
                onChange={handleChange}
                value={volunteerData.specialSkills}
                placeholder="Please Enter Your Special Skills"
              />
              <InputField
                label="Permanent Address"
                type="text"
                id="permanentAddress"
                onChange={handleChange}
                value={volunteerData.permanentAddress}
                placeholder="Please Enter Your Permanent Address"
              />
              <InputField
                label="District Upazila Permanent"
                type="text"
                id="districtUpazilaPermanent"
                onChange={handleChange}
                value={volunteerData.districtUpazilaPermanent}
                placeholder="Please Enter Your District Upazila Permanent"
              />
              <InputField
                label="Current Address"
                type="text"
                id="currentAddress"
                onChange={handleChange}
                value={volunteerData.currentAddress}
                placeholder="Please Enter Your Current Address"
              />
              <InputField
                label="District Upazila Current"
                type="text"
                id="districtUpazilaCurrent"
                onChange={handleChange}
                value={volunteerData.districtUpazilaCurrent}
                placeholder="Please Enter Your District Upazila Current"
              />
            </div>
          </div>
          <Button label={"Submit"} />
        </form>
      </div>
    </>
  );
};

export default VolunteerForm;
