import BigNumber from 'bignumber.js';
import { Hash256, Client, scriptHashToAddress } from '@neo-one/client';
import { createContracts } from '../smart-contract/codegen';
import config from '../.neo-one.config';

// set this to 'testnet' or 'local' if you are testing on a local node
const CURRENT_NETWORK = 'testnet';

const getUserAccountProvider = async (network: 'local' | 'testnet') => {
  switch (network) {
    case 'local':
      return config.networks.local.userAccountProvider();
    case 'testnet':
      return config.networks.testnet.userAccountProvider();
    default:
      throw new Error('for ts');
  }
}

const setupClientAndContracts = async () => {
  const userAccountProvider = await getUserAccountProvider(
    CURRENT_NETWORK
  );
  const client = new Client([userAccountProvider]);

  const { token, ico, escrow } = await createContracts(client);

  return { token, ico, escrow, client };
};

const run = async () => {
  const { client, ico, token } = await setupClientAndContracts();

  const account = client.getCurrentUserAccount();

  if (account === undefined) {
    throw new Error('this should be defined');
  }

  const amountPerNEO = await ico.amountPerNEO();
  const symbol = await token.symbol();
  const currentBalance = await token.balanceOf(account.id.address);
  console.log(`${symbol} Tokens currently available to our account: ${currentBalance.toNumber()}`);


  const amount = new BigNumber(10);
  console.log(`\nPreparing to mint ${amount.multipliedBy(amountPerNEO)} ${symbol}`);
  
  const receipt = await ico.mintTokens.confirmed(
    {
      sendTo: [{
        asset: Hash256.NEO,
        amount,
      }]
    }
  );

  if (receipt.result.state !== 'HALT') {
    throw new Error("Something went wrong and the 'mintToken' call failed");
  }

  console.log(`Successfully minted some ${symbol}!`)

  const newBalance = await token.balanceOf(account.id.address);
  console.log(`\nNew ${symbol} balance: ${newBalance.toNumber()}`)
}

run().then(() => {
  // do nothing
}).catch(console.error);
