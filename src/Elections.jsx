import { useEffect, useState } from "react";
import moment from "moment";
import ElectionCard from "./ElectionCard";
import ElectionDetails from "./ElectionDetails";
import ElectionDialog from "./ElectionDialog";
import AddElectionCard from "./AddElectionCard";

export const formatDate = (date) => {
  return date.format("DD MMM yyyy HH:MM");
};

export const toDate = (date) => {
  const timestamp = Math.floor(date / 1000000).toFixed();
  return moment(timestamp, "x");
};

const Elections = ({
  contract,
  currentUser,
  nearConfig,
  wallet,
  onLoading,
}) => {
  const [elections, setElections] = useState();
  const [shouldReloadElections, setShouldReloadElections] = useState(false);
  const [selectedElection, setSelectedElection] = useState();
  const [showElectionDialog, setShowElectionDialog] = useState(false);

  const activateElection = (election) => {
    localStorage.setItem("activeElection", election.id);
    setSelectedElection(election);
  };

  const deactivateElection = () => {
    localStorage.removeItem("activeElection");
    setSelectedElection(null);
  };

  const onElectionAdded = () => {
    setShouldReloadElections(true);
  };

  const showAddNewElection = () => {
    setShowElectionDialog(true);
  };

  useEffect(() => {
    if (elections) {
      const electionId = localStorage.getItem("activeElection");
      elections
        .filter((e) => `${e.id}` === electionId)
        .forEach((e) => {
          setSelectedElection(e);
        });
    }
  }, [elections, shouldReloadElections]);

  useEffect(() => {
    if (onLoading) {
      onLoading(true);
      contract.get_elections().then(
        (elections) => {
          onLoading(false);
          setElections(elections);
        },
        (err) => {
          onLoading(false);
        }
      );
    }
  }, [contract, onLoading]);

  return (
    <div className="container mx-auto flex-row">
      {!selectedElection && (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-4">
          <AddElectionCard
            contract={contract}
            currentUser={currentUser}
            nearConfig={nearConfig}
            wallet={wallet}
            onLoading={onLoading}
            showAddNewElection={showAddNewElection}
          />
          {elections &&
            elections.map((election, index) => {
              return (
                <ElectionCard
                  key={election.id}
                  election={election}
                  index={index}
                  contract={contract}
                  currentUser={currentUser}
                  nearConfig={nearConfig}
                  wallet={wallet}
                  onElectionSelected={activateElection}
                />
              );
            })}
        </div>
      )}
      {showElectionDialog && (
        <div className="backdrop-filter backdrop-blur-lg mx-auto w-80">
          <ElectionDialog
            contract={contract}
            currentUser={currentUser}
            nearConfig={nearConfig}
            wallet={wallet}
            onElectionAdded={() => {
              onElectionAdded();
              setShowElectionDialog(false);
            }}
            onLoading={onLoading}
            onClose={() => setShowElectionDialog(false)}
          />
        </div>
      )}
      {selectedElection && (
        <div className="grid grid-cols-1">
          <ElectionDetails
            election={selectedElection}
            contract={contract}
            currentUser={currentUser}
            nearConfig={nearConfig}
            wallet={wallet}
            onLoading={onLoading}
            onClose={deactivateElection}
          />
        </div>
      )}
    </div>
  );
};

export default Elections;
