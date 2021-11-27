import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function CandidateDialog({
  onClose,
  election,
  contract,
  currentUser,
  nearConfig,
  wallet,
  onCandidateAdded,
}) {
  const [candidateName, setCandidateName] = useState("");
  const [candidateSlogan, setCandidateSlogan] = useState("");
  const [candidateGoals, setCandidateGoals] = useState("My goals");
  const addCandidacy = () => {
    contract
      .add_candidacy({
        electionId: election.id,
        name: candidateName,
        slogan: candidateSlogan,
        goals: candidateGoals,
      })
      .then(
        () => {
          onCandidateAdded();
        },
        (err) => {
          console.log(err);
        }
      );
  };

  return (
    <>
      <Transition appear show={true} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={onClose}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Register as a cadidate
                </Dialog.Title>
                <TextField
                  label="Name"
                  value={candidateName}
                  onValueChange={(e) => setCandidateName(e.target.value)}
                />
                <TextField
                  label="Slogan"
                  value={candidateSlogan}
                  onValueChange={(e) => setCandidateSlogan(e.target.value)}
                />
                <TextField
                  label="Goals"
                  value={candidateGoals}
                  lines={4}
                  onValueChange={(e) => setCandidateGoals(e.target.value)}
                />
                <div className="mt-4 flex justify-between">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={addCandidacy}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

const TextField = ({ label, value, lines, onValueChange }) => {
  return (
    <div>
      <div className="flex flex-row mt-2 relative rounded-md">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700 mr-10 w-8"
        >
          {label}
        </label>
        {lines ? (
          <textarea
            className="border-2 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-200 rounded-md"
            name={label}
            id={label}
            rows={lines}
            onChange={onValueChange}
          ></textarea>
        ) : (
          <input
            type="text"
            name={label}
            id={label}
            className="border-2 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-200 rounded-md"
            value={value}
            onChange={onValueChange}
          />
        )}
      </div>
    </div>
  );
};
