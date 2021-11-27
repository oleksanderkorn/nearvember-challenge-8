import "regenerator-runtime/runtime";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Elections from "./Elections";
import Authorization from "./Authorization";
import LoadingIndicator from "./LoadingIndicator";

const App = ({ contract, currentUser, nearConfig, wallet }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="container mx-auto">
      <Authorization
        contract={contract}
        currentUser={currentUser}
        nearConfig={nearConfig}
        wallet={wallet}
        onLoading={setIsLoading}
      />
      <LoadingIndicator isLoading={isLoading} />
      {currentUser && (
        <Elections
          contract={contract}
          currentUser={currentUser}
          nearConfig={nearConfig}
          wallet={wallet}
          onLoading={setIsLoading}
        />
      )}
    </div>
  );
};

App.propTypes = {
  contract: PropTypes.shape({
    get_elections: PropTypes.func.isRequired,
    get_candidates: PropTypes.func.isRequired,
    get_votes: PropTypes.func.isRequired,
    get_god_mode: PropTypes.func.isRequired,
    add_election: PropTypes.func.isRequired,
    add_candidacy: PropTypes.func.isRequired,
    add_vote: PropTypes.func.isRequired,
    god_mode_on: PropTypes.func.isRequired,
    god_mode_off: PropTypes.func.isRequired,
  }).isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
  }),
  nearConfig: PropTypes.shape({
    contractName: PropTypes.string.isRequired,
  }).isRequired,
  wallet: PropTypes.shape({
    requestSignIn: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
