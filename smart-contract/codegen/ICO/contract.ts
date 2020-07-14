/* @hash 05125ee6717c7cb98b05f15d9675ebe5 */
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
    testnet: {
      address: 'ATsQmWH4MY3yRoP4GfGSuuqCs3k4H8MeVR'
    }
  },
  abi: icoABI,
  sourceMaps,
};

export const createICOSmartContract = <TClient extends Client>(client: TClient): ICOSmartContract<TClient> =>
  client.smartContract(definition);
