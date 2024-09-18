import React, { useEffect, useState } from "react";
import CrisisCard from "../../components/CrisisCard";
import axios from "axios";

export const DonateList = () => {
  const [data, setData] = useState([]);

  const fetchCrisisData = async () => {
    const response = await axios.get(`http://localhost:5001/api/crises`);
    console.log(response.data.data);
    setData(response.data.data);
  };

  useEffect(() => {
    fetchCrisisData();
  }, []);

  return (
    <>
      <section className="bg-white-50">
        <div className="flex flex-col items-center justify-center mx-auto">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full mt-20">
            {data.length > 0 &&
              data.map((item, index) => (
                <CrisisCard
                  title={item.title}
                  description={item.description}
                  id={index + 1}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};
