import React from "react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import { Card, Grid, Button } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";
import { Link } from "../../routes";

const CampaignShow = props => {
  const renderCards = () => {
    const {
      minimunContribution,
      balance,
      requestCount,
      approversCount,
      manager
    } = props;

    const items = [
      {
        header: manager,
        meta: "Address of Manager",
        description:
          "The manager created this campaign and can only create requests",
        style: { overflowWrap: "break-word" }
      },
      {
        header: minimunContribution,
        meta: "Minimum Contribution (wei)",
        description:
          "You must contribute atleast this wei to become a approver."
      },
      {
        header: requestCount,
        meta: "No. of requests",
        description:
          "It is a request tries to withdraw money from the contract."
      },
      {
        header: approversCount,
        meta: "Number of Approvers",
        description: "No. of people that have already donated to this campaign."
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Campaign balance",
        description: "How much money this campaign has left to spent."
      }
    ];

    return <Card.Group items={items} />;
  };

  return (
    <Layout>
      <h3>Campaign Show</h3>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>{renderCards()}</Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm address={props.address} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Link route={`/campaigns/${props.address}/requests`}>
              <Button primary>View Requests</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

CampaignShow.getInitialProps = async props => {
  const address = props.query.address;
  const campaign = Campaign(address);
  const summary = await campaign.methods.getSummary().call();

  return {
    address: props.query.address,
    minimunContribution: summary[0],
    balance: summary[1],
    requestCount: summary[2],
    approversCount: summary[3],
    manager: summary[4]
  };
};

export default CampaignShow;
