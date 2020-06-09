/* @hash 466f87132ee39bac7a33bc9ea34e647e */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';
import { EscrowSmartContract } from './types';
import { escrowABI } from './abi';
import { sourceMaps } from '../sourceMaps';

const definition = {
  networks: {
    local: {
      address: 'AX3xdKBXv5da9FAiFi6SDcEaVN2QgT9M5v',
    },
    priv: {
      address: 'AX3xdKBXv5da9FAiFi6SDcEaVN2QgT9M5v',
    },
  },
  abi: escrowABI,
  sourceMaps,
};

export const createEscrowSmartContract = <TClient extends Client>(client: TClient): EscrowSmartContract<TClient> =>
  client.smartContract(definition);
