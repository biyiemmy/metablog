import React from "react";

type Props = {};

const Advertisment = (props: Props) => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-[#E8E8EA] dark:bg-[#242535] text-center pt-3 mt-32 w-[750px] h-[100px] rounded-xl dark:text-[#696A75] text-[#696A75]">
        <p>Advertisement</p>
        <h3 className="text-[#696A75] dark:text-[#696A75">You can place ads</h3>
        <p>750x100</p>
      </div>
    </div>
  );
};

export default Advertisment;
