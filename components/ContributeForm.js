import React, { useState } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

const ContributeForm = props => {
  const [input, setInput] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async event => {
    event.preventDefault();
    const campaign = Campaign(props.address);
    setLoading(true);
    setErrMsg("");
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribution().send({
        from: accounts[0],
        value: web3.utils.toWei(input, "ether")
      });
      Router.replaceRoute(`/campaigns/${props.address}`);
    } catch (err) {
      setErrMsg(err.message);
    }
    setLoading(false);
  };

  return (
    <Form error={!!errMsg} onSubmit={onSubmitHandler}>
      <Form.Field>
        <label>Amount to Contribute</label>
        <Input
          label="ether"
          labelPosition="right"
          value={input}
          onChange={event => setInput(event.target.value)}
        />
      </Form.Field>
      <Message error header="Oops!" content={errMsg} />
      <Button loading={loading} primary type="submit">
        Contribute!
      </Button>
    </Form>
  );
};

export default ContributeForm;
