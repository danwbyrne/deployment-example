import { setupClientAndContracts } from '../smart-contract';
import BigNumber from 'bignumber.js';
import { Hash256 } from '@neo-one/client';

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