import React, { useState } from "react";
import Campaign from "../../../ethereum/campaign";
import web3 from "../../../ethereum/web3";
import Layout from "../../../components/Layout";
import { Form, Input, Button, Message } from "semantic-ui-react";
import { Link, Router } from "../../../routes";

const RequestNew = props => {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [recipient, setRecipient] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async event => {
    event.preventDefault();
    const campaign = Campaign(props.address);
    setLoading(true);
    setErrMsg("");
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, "ether"), recipient)
        .send({ from: accounts[0] });
      Router.pushRoute(`/campaigns/${props.address}/requests`);
    } catch (err) {
      setErrMsg(err.message);
    }
    setLoading(false);
  };

  return (
    <Layout>
      <Link route={`/campaigns/${props.address}/requests`}>
        <a>Back</a>
      </Link>
      <h3>Create A Request</h3>
      <Form error={!!errMsg} onSubmit={onSubmitHandler}>
        <Form.Field>
          <label>Description</label>
          <Input
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Value in Ether</label>
          <Input
            value={value}
            onChange={event => setValue(event.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>recipient</label>
          <Input
            value={recipient}
            onChange={event => setRecipient(event.target.value)}
          />
        </Form.Field>
        <Message error header="Oops!" content={errMsg} />
        <Button loading={loading} type="submit" primary>
          Create!
        </Button>
      </Form>
    </Layout>
  );
};

RequestNew.getInitialProps = async props => {
  return { address: props.query.address };
};

export default RequestNew;
