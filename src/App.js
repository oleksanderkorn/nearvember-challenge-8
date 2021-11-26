import "regenerator-runtime/runtime";
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Elections from "./Elections";
import Authorization from "./Authorization";

const App = ({ contract, currentUser, nearConfig, wallet }) => {
  return (
    <>
      <Authorization
        currentUser={currentUser}
        nearConfig={nearConfig}
        wallet={wallet}
      />
      {currentUser && <Elections contract={contract} />}
    </>
  );
};

App.propTypes = {
  contract: PropTypes.shape({
    current_points: PropTypes.func.isRequired,
    current_turn: PropTypes.func.isRequired,
    start_round: PropTypes.func.isRequired,
    end_round: PropTypes.func.isRequired,
    reset_game: PropTypes.func.isRequired,
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
