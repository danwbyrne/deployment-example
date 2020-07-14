/* @hash 907d5e1cb383b8ccef8c19e2426b7a44 */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';
import { TokenSmartContract } from './types';
import { tokenABI } from './abi';
import { sourceMaps } from '../sourceMaps';

const definition = {
  networks: {
    local: {
      address: 'AK4SJyPrqUKnDRdA5jarYP6yYhDH8G1k3t',
    },
    testnet: {
      address: 'ATzCFVAEa3kCa1HThY2ehxwKfuhNRwCU8J'
    }

  },
  abi: tokenABI,
  sourceMaps,
};

export const createTokenSmartContract = <TClient extends Client>(client: TClient): TokenSmartContract<TClient> =>
  client.smartContract(definition);
