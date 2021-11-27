import { Fragment, useState, useEffect } from "react";
import { useTimeoutFn } from "react-use";
import { Transition } from "@headlessui/react";
import { Switch } from "@headlessui/react";

const GodModeToggle = ({
  contract,
  currentUser,
  nearConfig,
  wallet,
  onLoading,
}) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (currentUser) {
      contract.get_god_mode({ accountId: currentUser.accountId }).then(
        (mode) => {
          console.log(`God mode: [${mode}]`);
          setEnabled(mode);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }, [enabled, contract, currentUser]);

  const switchMode = (isEnabled) => {
    if (isEnabled) {
      onLoading(true);
      contract.god_mode_on({}).then(
        () => {
          setEnabled(true);
          onLoading(false);
        },
        (err) => {
          onLoading(false);
        }
      );
    } else {
      onLoading(true);
      contract.god_mode_off({}).then(
        () => {
          setEnabled(false);
          onLoading(false);
        },
        (err) => {
          onLoading(false);
        }
      );
    }
  };

  return (
    <div className="flex-row content-between">
      <span>God mode: </span>
      <Switch
        checked={enabled}
        onChange={switchMode}
        className={`${
          enabled ? "bg-blue-600" : "bg-gray-200"
        } relative inline-flex items-center h-6 rounded-full w-11`}
      >
        <span className="sr-only">God mode</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block w-4 h-4 transform bg-white rounded-full`}
        />
      </Switch>
    </div>
  );
};

const Authorization = ({
  contract,
  currentUser,
  nearConfig,
  wallet,
  onLoading,
}) => {
  const signIn = () => {
    wallet.requestSignIn(nearConfig.contractName, "NEAR Voting App");
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
        enter="transform transition duration-[500ms]"
        enterFrom="opacity-0 rotate-[-120deg] scale-50"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100 "
        leaveTo="opacity-0 scale-95 "
      >
        <div className="flex justify-between bg-gradient-to-r from-green-400 to-blue-500 mt-6 p-2 mx-auto rounded-xl shadow-md items-center space-x-4">
          <img
            className="h-14 w-20"
            src="https://docs.near.org/img/near_logo.svg"
            alt="NEAR Logo"
          />

          <div
            className={`text-xl ${
              currentUser && currentUser.accountId ? "md:pl-60" : ""
            } font-medium text-black uppercase`}
          >
            Voting is cool 😎
          </div>
          <div className="flex justify-between">
            {currentUser && (
              <div className="mr-8">
                <p className="text-black-500">
                  Account ID: {currentUser.accountId}
                </p>
                <GodModeToggle
                  contract={contract}
                  currentUser={currentUser}
                  nearConfig={nearConfig}
                  wallet={wallet}
                  onLoading={onLoading}
                />
              </div>
            )}
            {currentUser ? (
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded float-right"
                onClick={signOut}
              >
                Logout
              </button>
            ) : (
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded float-right"
                onClick={signIn}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Authorization;
