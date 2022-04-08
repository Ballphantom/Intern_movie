import React from "react";
import { Link } from "react-router-dom";
function MovieCom() {
  return (
    <div className="w-350px  h-450px my-4 bg-[#FEFEFE] items-center">
      <Link to="/moviedetail">
          <div className="flex items-center justify-center rounded">
            <p>
              <span className="text-[rgb(0,0,0)] font-medium">Fast and Furious9</span>
              <br />              
              <p className="text-center">2021</p>
            </p>
          </div>
        <div className="w-[280px] h-[380px] bg-[#FEFEFE] relative overflow-hidden flex flex-col  ">
          <img className="w-full h-full object-cover items-center justify-center"
            src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a053c10d8f41ec9fe095824d04a506630f21adeb4dd13bcffa8f14b40b5e22da._RI_V_TTW_.jpg"
          />

        </div> 
        <div className="flex items-center justify-center rounded">
            <p>
            <i className="fa-solid fa-star text-[gold]"></i>
              <span className="text-[gold] font-medium">7.5 / 10</span>
              <br />
            </p>
          </div>
      </Link>      
    </div>

  );
}

export default MovieCom;
