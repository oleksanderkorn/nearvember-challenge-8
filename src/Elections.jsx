import { useEffect, useState } from "react";
import ErrorPopup from "./ErrorPopup";

const Elections = ({ contract }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {});

  return (
    <div className="md:container md:mx-auto">
      {isLoading ? (
        <div className="mt-4 mx-auto loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-20 w-20"></div>
      ) : (
        <div className="mt-4 h-20 w-20"></div>
      )}
    </div>
  );
};

export default Elections;
