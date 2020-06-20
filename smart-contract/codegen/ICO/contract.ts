/* @hash 86e5d251006ad514fd04df78923251ba */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';
import { ICOSmartContract } from './types';
import { icoABI } from './abi';
import { sourceMaps } from '../sourceMaps';

const definition = {
  networks: {
    local: {
      address: 'AXcQZewWPfc7o3WudtnV9LC2Tqguev3BFY',
    },
    priv: {
      address: 'AYbZ5PRPKNaKqz4oGT8TMP5752NhssrE8n',
    },
    testnet: {
      address: 'AXcQZewWPfc7o3WudtnV9LC2Tqguev3BFY',
    },
  },
  abi: icoABI,
  sourceMaps,
};

export const createICOSmartContract = <TClient extends Client>(client: TClient): ICOSmartContract<TClient> =>
  client.smartContract(definition);
