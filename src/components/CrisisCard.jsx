import React from "react";
import { Link } from "react-router-dom";
import photo from "../assets/image-1.jpg";

const CrisisCard = ({ title, description, id }) => {
  return (
    <>
      <section>
        <div className="bg-white border border-gray-200 rounded-lg shadow">
          <Link to={`/donate/crisis/${id}`}>
            <img className="rounded-t-lg" src={photo} />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tighter text-gray-900 dark:white">
                {title}
              </h5>
              <p>{description}</p>
              <button className="w-full mx-auto lg:mx-0 hover:underline gradient bg-green-700 text-white font-bold rounded-md my-6 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Donate
              </button>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default CrisisCard;
