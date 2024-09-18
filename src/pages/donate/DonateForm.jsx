import axios from "axios";
import photo from "../../assets/image-1.jpg";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import React, { useEffect, useState } from "react";
import InputField from "../../components/InputField";
import { toast } from "react-toastify";
import FormValidationErrorMsg from "../../components/FormValidationErrorMsg";

export const DonateForm = () => {
  const { id } = useParams(); // id of the crisis (if applicable)
  const [crisis, setCrisis] = useState(null);

  // Initialize state to handle form inputs
  const [donationData, setDonationData] = useState({
    donorName: "",
    email: "",
    amount: 0,
    phone: "",
    paymentMethod: "", // Add payment method to state
  });
  const [errorMsg, setErrorMsg] = useState([]);
  
  // Handle input changes
  const handleChange = (e) => {
    setDonationData({
      ...donationData,
      [e.target.id]: e.target.value, // Use the correct IDs and dynamically update state
    });
  };

  // Submit form data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/donation", {
        ...donationData,
        crisisId: id, // Send crisisId if applicable
      });
      toast.success("Donation successfully");
      setDonationData({
        donorName: "",
        email: "",
        amount: 0,
        phone: "",
        paymentMethod: "",
      });
    } catch (error) {
      setErrorMsg(error.response.data.error);
      toast.error("Error in Donation");
    }
  };

  // Fetch crisis data
  useEffect(() => {
    const fetchCrisis = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/crises/${id}`
        );
        setCrisis(response.data.data);
      } catch (error) {
        console.error("Error fetching crisis data:", error);
      }
    };
    fetchCrisis();
  }, [id]);

  if (!crisis) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-12 mt-20">
      {/* Main Donation Page Container */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Left Column (Crisis Details or Images) */}
        <div className="md:w-1/2 w-full space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{crisis.title}</h2>
          <p className="text-gray-600">{crisis.description}</p>
          {/* Example of an image or related content */}
          <img
            src={photo}
            alt="Flood relief"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Right Column (Donation Form) */}
        <div className="md:w-1/2 w-full bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Make a Donation
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <InputField
              label="Full Name"
              type="text"
              id="donorName" // Change id to match the key in the state (donorName)
              onChange={handleChange}
              value={donationData.donorName}
              placeholder="Please Enter Your Name"
            />
            <FormValidationErrorMsg errorMsg={errorMsg} label={"Donor Name"} />
            <InputField
              label="Email"
              type="email"
              id="email"
              onChange={handleChange}
              value={donationData.email}
              placeholder="Please Enter Your Email"
            />
            <FormValidationErrorMsg errorMsg={errorMsg} label={"Email"} />
            <InputField
              label="Phone"
              type="text"
              id="phone"
              onChange={handleChange}
              value={donationData.phone}
              placeholder="Please Enter Your Phone Number"
            />
            <FormValidationErrorMsg errorMsg={errorMsg} label={"Phone"} />
            <InputField
              label="Amount"
              type="number"
              id="amount"
              onChange={handleChange}
              value={donationData.amount}
              placeholder="Please Enter Amount"
            />
            <FormValidationErrorMsg errorMsg={errorMsg} label={"Amount"} />
            <div>
              <label
                htmlFor="payment-method"
                className="block text-sm font-medium text-gray-700"
              >
                Payment Method
              </label>
              <select
                id="paymentMethod" // Correct ID to match state
                value={donationData.paymentMethod} // Bind to state
                onChange={handleChange} // Handle change
                className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              >
                <option value="">-- Select Payment --</option>
                <option value="Bkash">Bkash</option>
                <option value="Rocket">Rocket</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>
              <FormValidationErrorMsg
                errorMsg={errorMsg}
                label={"Payment Method"}
              />
            </div>
            <Button label="Donate" />
          </form>
        </div>
      </div>
    </div>
  );
};
