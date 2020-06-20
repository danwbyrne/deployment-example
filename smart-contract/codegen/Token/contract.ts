/* @hash d23f640fed29ff97f6d2c71c029026c3 */
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
    priv: {
      address: 'ALeTFuwv3iq9NFXkasTpuH37nbMUQmdTwF',
    },
    testnet: {
      address: 'AK4SJyPrqUKnDRdA5jarYP6yYhDH8G1k3t',
    },
  },
  abi: tokenABI,
  sourceMaps,
};

export const createTokenSmartContract = <TClient extends Client>(client: TClient): TokenSmartContract<TClient> =>
  client.smartContract(definition);
