import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import TextField from "./TextField";

export default function ElectionDialog({
  onClose,
  election,
  contract,
  currentUser,
  nearConfig,
  wallet,
  onElectionAdded,
  onLoading,
}) {
  const [electionTitle, setElectionTitle] = useState("");
  const [electionDescription, setElectionDescription] = useState("");
  const [electionStartDate, setElectionStartDate] = useState("0");
  const [electionEndDate, setElectionEndDate] = useState("0");

  const addElection = () => {
    if (onLoading) {
      onLoading(true);
      contract
        .add_election({
          title: electionTitle,
          description: electionDescription,
          startDate: electionStartDate,
          endDate: electionEndDate,
        })
        .then(
          () => {
            onLoading(false);
            onElectionAdded();
          },
          (err) => {
            onLoading(false);
            console.log(err);
          }
        );
    }
  };

  return (
    <>
      <Transition appear show={true} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto backdrop-blur-xl"
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
                  Add new election
                </Dialog.Title>
                <TextField
                  label="Title"
                  value={electionTitle}
                  onValueChange={(e) => setElectionTitle(e.target.value)}
                />
                <TextField
                  label="Description"
                  value={electionDescription}
                  onValueChange={(e) => setElectionDescription(e.target.value)}
                />
                <TextField
                  label="Start on"
                  type="date"
                  value={electionStartDate}
                  onValueChange={(e) => setElectionStartDate(e.target.value)}
                />
                <TextField
                  label="Ends on"
                  value={electionEndDate}
                  type="date"
                  onValueChange={(e) => setElectionEndDate(e.target.value)}
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
                    onClick={addElection}
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
