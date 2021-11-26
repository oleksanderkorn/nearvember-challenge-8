import { Fragment, useState, useEffect } from "react";
import { useTimeoutFn } from "react-use";
import { Transition } from "@headlessui/react";

const Authorization = ({ currentUser, nearConfig, wallet }) => {
  const signIn = () => {
    wallet.requestSignIn(nearConfig.contractName, "NEAR Yatzi App");
  };

  const signOut = () => {
    wallet.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
  };

  let [isShowing, setIsShowing] = useState(true);
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);

  useEffect(() => {
    resetIsShowing();
  }, [resetIsShowing]);
  return (
    <>
      <Transition
        as={Fragment}
        show={isShowing}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 rotate-[-120deg] scale-50"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100 "
        leaveTo="opacity-0 scale-95 "
      >
        <div className="mt-6 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="h-14 w-20"
              src="https://docs.near.org/img/near_logo.svg"
              alt="NEAR Logo"
            />
            {currentUser ? (
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={signOut}
              >
                Log out
              </button>
            ) : (
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={signIn}
              >
                Log in
              </button>
            )}
          </div>
          <div>
            <div className="text-xl font-medium text-black">Governance</div>
            {currentUser ? (
              <div>
                <p className="text-gray-500">
                  Account ID: {currentUser.accountId}{" "}
                </p>
              </div>
            ) : (
              <div>
                <p className="text-gray-500">Sign in to participate</p>
              </div>
            )}
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Authorization;
