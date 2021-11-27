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
}) => {
  const [isShowing, setIsShowing] = useState(false);
  const [closeButtonColor, setCloseButtonColor] = useState("#000");
  const [candidates, setCandidates] = useState([]);
  const [shouldReloadCandidates, setShouldReloadCandidates] = useState(false);
  const [showCandidateDialog, setShowCandidateDialog] = useState(false);

  const creationDate = toDate(election.creationDate);
  const startDate = toDate(election.startDate);
  const endDate = toDate(election.endDate);
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 100);

  const [isGodMode, setIsGodeMode] = useState(false);
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
    return isGodMode || startDate < moment();
  };

  const voteForCandidate = () => {
    if (onLoading) {
      onLoading(true);
      contract
        .add_vote({
          electionId: election.id,
          candidateId: selectedCandidate.id,
          comment: "",
        })
        .then(
          (candidates) => {
            onLoading(false);
            setCandidates(candidates);
          },
          (err) => {
            onLoading(false);
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
            disabled={!canAddCandidacy}
            className="disabled:opacity-50 mt-2 bg-green-500 hover:bg-green-700 w-14 h-14 text-white font-bold py-2 px-4 rounded-xl float-right"
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
        <div className="text-xl font-medium text-black">
          {election.description}
          <button
            className="disabled:opacity-50 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded float-right"
            onClick={voteForCandidate}
            disabled={!selectedCandidate}
          >
            Submit vote
          </button>
        </div>
        <div className="text-md font-medium text-black text">
          Created at: {formatDate(creationDate)}
        </div>
        <div className="text-md font-medium text-black text">
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
              onClose={() => setShowCandidateDialog(false)}
            />
          </div>
        )}
        {candidates && (
          <div>
            <CandidateCards
              election={election}
              candidates={candidates}
              contract={contract}
              currentUser={currentUser}
              nearConfig={nearConfig}
              wallet={wallet}
              onCandidateSelected={setSelectedCandidate}
            />
          </div>
        )}
      </div>
    </Transition>
  );
};

export default ElectionDetails;
