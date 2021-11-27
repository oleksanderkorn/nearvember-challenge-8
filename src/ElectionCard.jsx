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
  onLoading,
  onElectionSelected,
}) => {
  let [isShowing, setIsShowing] = useState(false);
  let [isHovered, setIsHovered] = useState(false);
  const [votes, setVotes] = useState();
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    if (onLoading) {
      onLoading(true);
      contract.get_votes({ electionId: election.id }).then(
        (votes) => {
          onLoading(false);
          setVotes(votes);
        },
        (err) => {
          onLoading(false);
        }
      );
    }
  }, [contract, election.id, onLoading]);

  useEffect(() => {
    if (votes && votes.votes && votes.votes.length > 0) {
      setCandidates(votes.votes);
    } else {
      setCandidates([]);
    }
  }, [votes]);

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
        }  p-6 max-w-sm mx-auto rounded-xl flex-col shadow-md flex space-x-4 space-y-2 cursor-pointer`}
      >
        <div className="text-xl font-medium text-black text-center">
          {election.title}
        </div>
        <div className="text-xl font-medium text-black break-all flex flex-row justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          {election.description}
        </div>
        <div className="text-md font-medium text-black text flex flex-row items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>Created: {formatDate(creationDate)}</p>
        </div>
        <div className="text-sm font-medium text-black text flex flex-row items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {formatDate(startDate)} - {formatDate(endDate)}
        </div>
        <div className="text-sm font-medium text-black text flex flex-row items-center">
          {candidates &&
            candidates.length === 0 &&
            "No candidates yes, apply to be the first!"}
          {candidates &&
            candidates.length > 0 &&
            `${candidates.length} candidate(s) applied`}
        </div>
        <div className="text-sm font-medium text-black text flex flex-row items-center">
          {candidates && candidates.length > 0 && (
            <div>
              Leaderboard:
              {candidates
                .sort((c1, c2) =>
                  c1.votes.length === c2.votes.length
                    ? 0
                    : c1.votes.length > c2.votes.length
                    ? -1
                    : 1
                )
                .map((c, index) => {
                  return <Leaderboard key={index} candidate={c} />;
                })}
            </div>
          )}
        </div>
      </div>
    </Transition>
  );
};

const Leaderboard = ({ candidate }) => {
  return (
    <div className="flex">
      <div>
        {candidate.candidate.name} ({candidate.votes.length})
      </div>
    </div>
  );
};

export default ElectionCard;
