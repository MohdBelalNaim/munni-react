import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="fixed inset-0 grid place-items-center z-50 glass">
      <TailSpin color="#202e51" height={40} width={40} />
    </div>
  );
};

export default Loader;
