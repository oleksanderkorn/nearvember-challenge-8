import { Fragment, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { useTimeoutFn } from "react-use";
import { formatDate, toDate } from "./Elections";

const ElectionCard = ({
  election,
  index,
  delay,
  contract,
  currentUser,
  nearConfig,
  wallet,
  onElectionSelected,
}) => {
  let [isShowing, setIsShowing] = useState(false);
  let [isHovered, setIsHovered] = useState(false);

  const creationDate = toDate(election.creationDate);
  const startDate = toDate(election.startDate);
  const endDate = toDate(election.endDate);

  let [, , resetIsShowing] = useTimeoutFn(
    () => setIsShowing(true),
    index * 200
  );

  useEffect(() => {
    resetIsShowing();
  }, [resetIsShowing]);

  return (
    <Transition
      as={Fragment}
      show={isShowing}
      enter={`transform transition duration-[${delay}ms]`}
      enterFrom="opacity-0 rotate-[-120deg] scale-50"
      enterTo="opacity-100 rotate-0 scale-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 rotate-0 scale-100 "
      leaveTo="opacity-0 scale-95 "
    >
      <div
        onClick={() => onElectionSelected(election)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`w-full bg-gradient-to-r ${
          isHovered
            ? "from-yellow-500 to-red-600"
            : "from-yellow-400 to-red-500"
        }  p-6 max-w-sm mx-auto rounded-xl flex-col shadow-md flex items-center space-x-4 cursor-pointer`}
      >
        <div className="text-xl font-medium text-black">{election.title}</div>
        <div className="text-xl font-medium text-black break-all">
          {election.description}
        </div>

        <div className="text-md font-medium text-black text">
          Created at: {formatDate(creationDate)}
        </div>
        <div className="text-md font-medium text-black text">
          {formatDate(startDate)} - {formatDate(endDate)}
        </div>
      </div>
    </Transition>
  );
};

export default ElectionCard;
