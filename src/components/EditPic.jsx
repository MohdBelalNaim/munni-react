"use client";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

function EditPic() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 glass z-50 grid place-items-center">
          <div className="bg-white relative rounded-md w-[min(440px,96%)]">
            <FontAwesomeIcon icon={faTimes} onClick={() => setIsVisible(false)} className="absolute cursor-pointer text-black font-bold px-4 pt-4"/>
            <div className="text-lg font-medium text-center p-3 border-b">
              Change Profile Photo
            </div>
            <div  className="flex items-center gap-2 justify-center text-lg text-center text-blue-700 font-bold p-3 border-b">
                <FaRegEdit/>
                Upload Photo
            </div>
            <div  className="flex items-center gap-2 justify-center text-lg text-center text-red-700 font-bold p-3">
                < AiOutlineDelete/>
                Remove Current Photo
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default EditPic;
