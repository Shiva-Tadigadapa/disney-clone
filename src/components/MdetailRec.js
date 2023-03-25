import React from "react";

export const MdetailRec = () => {
  return (
    <div className=" w-[100%] absolute top-[100%] flex items-center h-[40%] justify-center">
      <div className="w-[90%] bg-black h-[100%] rounded-[8px]">
        <div className=" pt-[10px] pl-[20px]">Recmondation</div>
        <hr className="border-[rgb(255,255,255)] border-2" />
        <div className=" flex overflow-auto whitespace-nowrap	h-[100%] w-[100%] bg-slate-700">
          <div className="flex  bg-blue-500 h-[80%] w-[150px]">
            <img className="bg-white h-[100%] w-[100%]" src="" alt="" />
          </div>          
        </div>
      </div>
    </div>
  );
};

export default MdetailRec;
