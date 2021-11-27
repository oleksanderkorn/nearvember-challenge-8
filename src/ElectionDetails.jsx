import { Fragment, useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { formatDate, toDate } from "./Elections";
import CandidateCards from "./CandidateCards";
import CandidateDialog from "./CandidateDialog";
import { useTimeoutFn } from "react-use";
import moment from "moment";

const ElectionDetails = ({
  election,
  contract,
  currentUser,
  nearConfig,
  wallet,
  onClose,
  onLoading,
  onError,
}) => {
  const [isShowing, setIsShowing] = useState(false);
  const [closeButtonColor, setCloseButtonColor] = useState("#000");
  const [candidates, setCandidates] = useState([]);
  const [votes, setVotes] = useState([]);
  const [shouldReloadCandidates, setShouldReloadCandidates] = useState(false);
  const [shouldReloadVotes, setShouldReloadVotes] = useState(false);
  const [showCandidateDialog, setShowCandidateDialog] = useState(false);

  const creationDate = toDate(election.creationDate);
  const startDate = toDate(election.startDate);
  const endDate = toDate(election.endDate);
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 100);

  const [isGodMode, setIsGodeMode] = useState(false);
  const [isUserVoted, setIsUserVoted] = useState(false);
  const [isUserApplied, setIsUserApplied] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState();

  useEffect(() => {
    if (currentUser) {
      contract
        .get_god_mode({ accountId: currentUser.accountId })
        .then((mode) => {
          setIsGodeMode(mode);
        });
    }
  }, [isGodMode, contract, currentUser]);

  useEffect(() => {
    if (currentUser && currentUser.accountId && candidates) {
      candidates
        .filter((c) => c.accountId === currentUser.accountId)
        .forEach(() => setIsUserApplied(true));
    }
  }, [contract, candidates, currentUser]);

  useEffect(() => {
    if (currentUser && currentUser.accountId && votes && votes.votes) {
      votes.votes.forEach((c) => {
        c.votes
          .filter((v) => v.accountId === currentUser.accountId)
          .forEach((v) => setIsUserVoted(true));
      });
    }
  }, [contract, votes, currentUser]);

  useEffect(() => {
    if (onLoading) {
      onLoading(true);
      contract.get_candidates({ electionId: election.id }).then(
        (candidates) => {
          onLoading(false);
          setCandidates(candidates);
        },
        (err) => {
          onLoading(false);
        }
      );
    }
  }, [contract, election.id, shouldReloadCandidates, onLoading]);

  const canAddCandidacy = () => {
    return !isUserApplied && (isGodMode || startDate < moment());
  };

  useEffect(() => {
    if (onLoading) {
      onLoading(true);
      contract.get_votes({ electionId: election.id }).then(
        (votes) => {
          onLoading(false);
          setShouldReloadVotes(false);
          setVotes(votes);
        },
        (err) => {
          onLoading(false);
        }
      );
    }
  }, [contract, election.id, onLoading, shouldReloadVotes]);

  const voteForCandidate = () => {
    if (onLoading) {
      onLoading(true);
      contract
        .add_vote({
          electionId: election.id,
          candidateId: selectedCandidate,
          comment: "",
        })
        .then(
          () => {
            setShouldReloadVotes(true);
            onLoading(false);
          },
          (err) => {
            onLoading(false);
            onError(`${err.kind["ExecutionError"]}`);
          }
        );
    }
  };

  useEffect(() => {
    resetIsShowing();
  }, [resetIsShowing]);

  return (
    <Transition
      as={Fragment}
      show={isShowing}
      enter={`transform transition duration-[250ms]`}
      enterFrom="opacity-0 rotate-[-120deg] scale-50"
      enterTo="opacity-100 rotate-0 scale-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 rotate-0 scale-100 "
      leaveTo="opacity-0 scale-95 "
    >
      <div className="mw-800 bg-gradient-to-r from-indigo-300 to-indigo-500 p-6 rounded-xl flex-col shadow-md flex space-x-4">
        <div className="text-2xl flex justify-between font-medium items-center mb-4">
          <button
            onClick={() => setShowCandidateDialog(true)}
            disabled={!canAddCandidacy()}
            className="disabled:opacity-50 ml-4 bg-green-500 hover:bg-green-700 w-14 h-14 text-white font-bold py-2 px-4 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
          </button>
          <div className="mt-2 text-2xl text-center font-medium text-black">
            {election.title}
          </div>
          <button
            className="font-medium "
            onClick={onClose}
            onMouseEnter={() => setCloseButtonColor("#ddd")}
            onMouseLeave={() => setCloseButtonColor("#000")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke={closeButtonColor}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="text-xl font-medium text-black flex flex-row items-center justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-1 flex-none"
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
          <p className="flex-grow">{election.description}</p>
          <button
            className="disabled:opacity-50 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex-none"
            onClick={voteForCandidate}
            disabled={isUserVoted || !selectedCandidate}
          >
            {isUserVoted ? "Already voted" : "Submit vote"}
          </button>
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
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {formatDate(startDate)} - {formatDate(endDate)}
        </div>
        <div className="text-xl font-medium text-black text-center">
          {candidates.length > 0
            ? "Candidates:"
            : "No cadidates yes, apply to be the first"}
        </div>
        {showCandidateDialog && (
          <div className="backdrop-filter backdrop-blur-lg mx-auto w-80">
            <CandidateDialog
              election={election}
              contract={contract}
              currentUser={currentUser}
              nearConfig={nearConfig}
              wallet={wallet}
              onCandidateAdded={() => {
                setShouldReloadCandidates(true);
                setShowCandidateDialog(false);
              }}
              onError={onError}
              onLoading={onLoading}
              onClose={() => setShowCandidateDialog(false)}
            />
          </div>
        )}
        {candidates && (
          <div>
            <CandidateCards
              election={election}
              candidates={candidates}
              votes={votes}
              contract={contract}
              currentUser={currentUser}
              nearConfig={nearConfig}
              wallet={wallet}
              onLoading={onLoading}
              onCandidateSelected={setSelectedCandidate}
            />
          </div>
        )}
      </div>
    </Transition>
  );
};

export default ElectionDetails;
