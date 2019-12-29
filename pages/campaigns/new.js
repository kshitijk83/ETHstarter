import React, {useState}  from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

const CampaignNew = (props) => {
    const [miniContribution, setMiniContribution] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmitHandler=async(event)=>{
        event.preventDefault();
        setLoading(true);
        setErrMsg('');
        try{
            const accounts = await web3.eth.getAccounts();
            await factory.methods.createCampaigns(miniContribution)
            .send({
                from: accounts[0]
            });
            Router.pushRoute('/');
        } catch(err){
            setErrMsg(err.message);
        }
        setLoading(false);
    }

    return(
        <Layout>
            <h1>Create a Campaign</h1>
            <Form error={!!errMsg} onSubmit={onSubmitHandler}>
                <Form.Field>
                    <label>Minimum Contribution</label>
                    <Input
                    label="wei"
                    labelPosition="right"
                    value={miniContribution}
                    onChange={event=>setMiniContribution(event.target.value)}
                    />
                </Form.Field>
                <Message error header="Oops!" content={errMsg} />
                <Button loading={loading} primary type="submit" >Create!</Button>
            </Form>
        </Layout>
    )
}

export default CampaignNew;