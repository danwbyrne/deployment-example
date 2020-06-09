/* @hash fb0af52305c071d8666cd55794ec6f7e */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';
import { ICOSmartContract } from './types';
import { icoABI } from './abi';
import { sourceMaps } from '../sourceMaps';

const definition = {
  networks: {
    local: {
      address: 'AYbZ5PRPKNaKqz4oGT8TMP5752NhssrE8n',
    },
    priv: {
      address: 'AYbZ5PRPKNaKqz4oGT8TMP5752NhssrE8n',
    },
  },
  abi: icoABI,
  sourceMaps,
};

export const createICOSmartContract = <TClient extends Client>(client: TClient): ICOSmartContract<TClient> =>
  client.smartContract(definition);
