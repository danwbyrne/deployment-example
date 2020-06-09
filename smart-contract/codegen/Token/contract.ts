/* @hash 4d6600e43a4443c8456cc26827519df5 */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';
import { TokenSmartContract } from './types';
import { tokenABI } from './abi';
import { sourceMaps } from '../sourceMaps';

const definition = {
  networks: {
    local: {
      address: 'ALeTFuwv3iq9NFXkasTpuH37nbMUQmdTwF',
    },
    priv: {
      address: 'ALeTFuwv3iq9NFXkasTpuH37nbMUQmdTwF',
    },
  },
  abi: tokenABI,
  sourceMaps,
};

export const createTokenSmartContract = <TClient extends Client>(client: TClient): TokenSmartContract<TClient> =>
  client.smartContract(definition);
