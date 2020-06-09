/* @hash 9dba4571f45dba77801e841d59a9e9b5 */
// tslint:disable
/* eslint-disable */
import { createWithContracts, TestOptions, WithContractsOptions } from '@neo-one/smart-contract-test';
import { Contracts } from './contracts';
import * as path from 'path';

export const withContracts: (
  test: (contracts: Contracts & TestOptions) => Promise<void>,
  options?: WithContractsOptions,
) => Promise<void> = createWithContracts([
  { name: 'Token', filePath: path.resolve(__dirname, '../neo-one/contracts/Token.ts') },
  { name: 'Escrow', filePath: path.resolve(__dirname, '../neo-one/contracts/Escrow.ts') },
  { name: 'ICO', filePath: path.resolve(__dirname, '../neo-one/contracts/ICO.ts') },
]);
