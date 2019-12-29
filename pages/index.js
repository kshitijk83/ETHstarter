import React, { useState, useEffect } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

const campaignIndex = (props) => {
    const {campaigns} = props;

    const renderCampaigns =()=>{
        const items = campaigns.map(address=>{
            return{
                header: address,
                description: (
                    <Link route={`/campaigns/${address}`} >
                        <a>View Campaign</a>
                    </Link>
                ),
                fluid: true
            }
        })
        return <Card.Group items={items} />
    }

    return(
        <Layout>
            <h3>Open Campaign</h3>
            <Link route="/campaigns/new" >
                <a>
                    <Button
                    floated="right"
                    content="Create Campaign"
                    icon="add circle"
                    primary
                    />
                </a>
            </Link>
            {renderCampaigns()}
        </Layout>
    )
}

campaignIndex.getInitialProps = async()=>{
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return {campaigns}
}

export default campaignIndex;