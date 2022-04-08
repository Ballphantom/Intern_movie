import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import MovieModal from "../components/MovieModal";

function MovieDetail() {
  let navigate = useNavigate();

  const location = useLocation();

  const [showModal, setShowModal] = useState<boolean>(false);

  const clickShow = () => {
    setShowModal(!showModal);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className=" rounded-lg drop-shadow-2xl relativeh">
      <div className="bg-[#F7F7F7] flex flex-col items-center border-b-2 relative">
        <p className="text-2xl font-bold h-5">
          Fast and Furious 9
        </p>          
        <img
          className="w-[200px]  h-[280px] my-4 border-4 border-[#FEFEFE] drop-shadow-lg items-center"
          src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a053c10d8f41ec9fe095824d04a506630f21adeb4dd13bcffa8f14b40b5e22da._RI_V_TTW_.jpg"
        />
      
        <div className="flex items-center w-15 h-2 m-5">
          <AiFillStar className="mr-1 fill-[#FFDA44]" />
          <p>
            <span className="text-[#FFDA44]">7.5 </span>
          </p>
        </div>
      </div>

      <div className="bg-[#FFFFFF] px-12 py-10">
        <div>
          <p className="text-[#00CECC] text-xl ">Released on</p>
          <p><i>2021</i></p>
        </div> 
        <div className="mt-2">
          <p className="text-[#00CECC] text-xl ">Director</p>
          <p><i>Zack Snyder and Vin Desel</i></p>
        </div>
        <div className="mt-2">
          <p className="text-[#00CECC] text-xl ">Stars</p>
          <p><i>Vin Desel, Paul Walker, John Cena</i></p>
        </div>
        <div className="mt-2">
          <p className="text-[#00CECC] text-xl ">Reviewers</p>
          <p><i>1K users</i></p>
        </div>

        <div className="flex justify-center mt-5">
          <button
            className="bg-[#FF496D] w-[150px] p-3 rounded text-white mr-5"
            onClick={clickShow}
          >
            View Detail
          </button>
          <button
            className="bg-[#C3C3C3] w-[150px] p-3 rounded text-white"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      </div>

      <div
        className={`${
          showModal ? "" : "hidden"
        } absolute z-10 top-10 left-20 right-20 `}
      >
        <MovieModal closeShowModal={setShowModal} isShowModal={showModal}>
          <div className="drop-shadow-2xl bg-white  py-5 px-10 rounded">
            <p className="font-bold">Detail</p>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, ipsa?
              ipsum dolor sit amet consectetur adipisicing elit. Iure, ut.
              ipsum dolor sit amet consectetur adipisicing elit. Et, recusandae.
            </p>
          </div>
        </MovieModal>
      </div>
    </div>
  );
}

export default MovieDetail;
