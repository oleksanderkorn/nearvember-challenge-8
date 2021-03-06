import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import TextField from "./TextField";
import moment from "moment";

export default function ElectionDialog({
  onClose,
  election,
  contract,
  currentUser,
  nearConfig,
  wallet,
  onElectionAdded,
  onLoading,
  onError,
}) {
  const [electionTitle, setElectionTitle] = useState("");
  const [electionDescription, setElectionDescription] = useState("");
  const [electionStartDate, setElectionStartDate] = useState(
    moment().add(1, "day").startOf("day").toDate()
  );
  const [electionEndDate, setElectionEndDate] = useState(
    moment().add(7, "days").endOf("day").toDate()
  );

  const canAddElection = () => {
    return (
      electionTitle.length > 0 &&
      electionDescription.length > 0 &&
      electionTitle.length > 0 &&
      electionStartDate &&
      electionEndDate
    );
  };

  const addElection = () => {
    if (onLoading) {
      onLoading(true);
      contract
        .add_election({
          title: electionTitle,
          description: electionDescription,
          startDate: moment(electionStartDate).format("x"),
          endDate: moment(electionEndDate).format("x"),
        })
        .then(
          () => {
            onLoading(false);
            onElectionAdded();
          },
          (err) => {
            onError(`${err.kind["ExecutionError"]}`);
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
              <div className="inline-block w-full md:w-1/2 lg:w-1/3 p-6 my-8 overflow-auto text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
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
                  isDate
                  value={electionStartDate}
                  onValueChange={(date) => setElectionStartDate(date)}
                />
                <TextField
                  label="Ends on"
                  value={electionEndDate}
                  type="date"
                  isDate
                  onValueChange={(date) => setElectionEndDate(date)}
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
                    className="disabled:opacity-50 inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={addElection}
                    disabled={!canAddElection()}
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
