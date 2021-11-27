import { useState, useEffect } from "react";
import { RadioGroup } from "@headlessui/react";

const CandidateCards = ({
  election,
  candidates,
  votes,
  contract,
  currentUser,
  nearConfig,
  wallet,
  onCandidateSelected,
  onLoading,
}) => {
  const [selected, setSelected] = useState();

  return (
    <>
      <div className="w-full">
        <RadioGroup
          value={selected}
          onChange={(c) => {
            setSelected(c);
            onCandidateSelected(c);
          }}
        >
          <RadioGroup.Label className="sr-only">Candidate</RadioGroup.Label>
          <div className="flex flex-col justify-between">
            {candidates.map((candidate, index) => (
              <RadioGroup.Option
                key={index}
                value={candidate.accountId}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60"
                      : ""
                  }
                      ${
                        checked
                          ? "bg-sky-900 bg-opacity-75 text-white bg-green-500"
                          : "bg-white"
                      }
                      w-full min-w-10 relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none my-2`
                }
              >
                {({ active, checked }) => (
                  <CandidateDetails
                    candidate={candidate}
                    votes={votes}
                    active={active}
                    checked={checked}
                    onLoading={onLoading}
                  />
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </>
  );
};

const CandidateDetails = ({ candidate, votes, active, checked, onLoading }) => {
  const [candidateVotes, setCandidateVotes] = useState([]);

  useEffect(() => {
    if (candidate && votes && votes.votes) {
      votes.votes
        .filter((v) => v.candidate.accountId === candidate.accountId)
        .forEach((v) => {
          setCandidateVotes(v.votes);
        });
    }
  }, [votes, candidate]);

  return (
    <div className="flex items-center justify-between w-full">
      <div className="w-1/4 flex items-center">
        <div className="text-sm">
          <RadioGroup.Label
            as="div"
            className={`font-medium flex align-center ${
              checked ? "text-white" : "text-gray-900"
            }`}
          >
            <AccountIcon />
            <p className="flex-grow">{candidate.accountId}</p>
          </RadioGroup.Label>
          <RadioGroup.Description
            as="span"
            className={`inline mx-2${
              checked ? "text-sky-100 bg-green-400" : "text-gray-500"
            }`}
          >
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 flex-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <p className="flex-grow">{candidate.name}</p>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-none mr-2 h-6 w-6 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="flex-grow">{candidate.slogan}</p>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-none mr-2 h-6 w-6"
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
              <p className="flex-grow">{candidate.goals}</p>
            </div>
          </RadioGroup.Description>
        </div>
      </div>
      <div className="self-start flex flex-col">
        <div>
          {candidateVotes && candidateVotes.length > 0
            ? `Votes (${candidateVotes.length}):`
            : "No votes yes"}
        </div>
        {candidateVotes &&
          candidateVotes.map((vote, index) => (
            <VoteCard key={index} vote={vote} />
          ))}
      </div>
      <div className="flex-shrink-0 text-white">
        {checked && <CheckIcon className="w-6 h-6" />}
      </div>
    </div>
  );
};

const VoteCard = ({ vote }) => {
  return (
    <div>
      <div className="flex">
        <div>
          <AccountIcon />
        </div>
        <div>{vote.accountId}</div>
      </div>
    </div>
  );
};

function AccountIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mr-2 flex-none"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
      />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CandidateCards;
