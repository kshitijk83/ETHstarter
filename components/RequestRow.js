import React, { useState } from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";

const RequestRow = props => {
  const [approveLoading, setApproveLoading] = useState(false);
  const [finalizeLoading, setFinalizeLoading] = useState(false);
  const [approveErrMsg, setApproveErrMsg] = useState("");
  const [finalizeErrMsg, setFinalizeErrMsg] = useState("");
  const { Row, Cell } = Table;
  const { id, request, approversCount } = props;
  const readyToFinalize = request.approvalCount > approversCount / 2;

  const onApproveHandler = async () => {
    const campaign = Campaign(props.address);
    setApproveLoading(true);
    setApproveErrMsg("");
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.approveRequest(props.id).send({
        from: accounts[0]
      });
    } catch (err) {
      setApproveErrMsg(err.message);
    }
    setApproveLoading(false);
  };

  const onFinalizeHandler = async () => {
    const campaign = Campaign(props.address);
    setFinalizeLoading(true);
    setFinalizeErrMsg("");
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.finalizeRequest(props.id).send({
        from: accounts[0]
      });
    } catch (err) {
      setFinalizeErrMsg(err.message);
    }
    setFinalizeLoading(false);
  };

  return (
    <Row
      disabled={request.complete}
      positive={readyToFinalize && !request.complete}
    >
      <Cell>{id}</Cell>
      <Cell>{request.description}</Cell>
      <Cell>{web3.utils.fromWei(request.value, "ether")}</Cell>
      <Cell>{request.recipient}</Cell>
      <Cell>{`${request.approvalCount}/${approversCount}`}</Cell>
      <Cell>
        {request.complete ? null : (
          <>
            <Button
              loading={approveLoading}
              basic
              color="green"
              onClick={onApproveHandler}
            >
              Approve
            </Button>
            <p>{approveErrMsg}</p>
          </>
        )}
      </Cell>
      <Cell>
        {request.complete ? null : (
          <>
            <Button
              loading={finalizeLoading}
              basic
              color="teal"
              onClick={onFinalizeHandler}
            >
              Finalize
            </Button>
            <p>{finalizeErrMsg}</p>
          </>
        )}
      </Cell>
    </Row>
  );
};

export default RequestRow;
