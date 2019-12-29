import web3 from './web3';
import CampaignFactory from './build/Factory.json';

const factoryAddress = '0x8EDE3Af0617823e544230b393268103A02E8cb3F';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    factoryAddress
)

export default instance;