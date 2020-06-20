/* @hash 556e27c59fe5929b28f335165f8223d4 */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';
import { EscrowSmartContract } from './types';
import { escrowABI } from './abi';
import { sourceMaps } from '../sourceMaps';

const definition = {
  networks: {
    local: {
      address: 'ANC3mB5QeZ1X3kwzRo6rTA5bApdHrMKaE5',
    },
    priv: {
      address: 'AX3xdKBXv5da9FAiFi6SDcEaVN2QgT9M5v',
    },
    testnet: {
      address: 'ANC3mB5QeZ1X3kwzRo6rTA5bApdHrMKaE5',
    },
  },
  abi: escrowABI,
  sourceMaps,
};

export const createEscrowSmartContract = <TClient extends Client>(client: TClient): EscrowSmartContract<TClient> =>
  client.smartContract(definition);
