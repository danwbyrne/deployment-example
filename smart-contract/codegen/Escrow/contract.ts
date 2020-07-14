/* @hash 5642d6fefd4757854ec45434bca7bb76 */
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
    testnet: {
      address: 'AQndkQDDqgPh36B5aSBT2vApFp3mD4DHvU',
    }
  },
  abi: escrowABI,
  sourceMaps,
};

export const createEscrowSmartContract = <TClient extends Client>(client: TClient): EscrowSmartContract<TClient> =>
  client.smartContract(definition);
