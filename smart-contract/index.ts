import { createClient, createContracts } from './codegen';

export const setupClientAndContracts = async () => {
  const client = await createClient();

  // hotfix for a bug fixed in https://github.com/neo-one-suite/neo-one/pull/2056 but not yet released
  await new Promise((resolve) => {
    setTimeout(resolve, 1);
  })

  const { ico, token, escrow } = createContracts(client);

  return { client, ico, token, escrow };
}