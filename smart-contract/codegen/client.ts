/* @hash 4e11ff76e58cdd46f396b19e79696db8 */
// tslint:disable
/* eslint-disable */
import {
  Client,
  DapiUserAccountProvider,
  DeveloperClient,
  DeveloperClients,
  LocalKeyStore,
  LocalMemoryStore,
  LocalUserAccountProvider,
  NEOONEProvider,
  NEOONEDataProvider,
  UserAccountProviders,
} from "@neo-one/client";

export interface DefaultUserAccountProviders {
  readonly memory: LocalUserAccountProvider<LocalKeyStore, NEOONEProvider>;
}

const getDefaultUserAccountProviders = (provider: NEOONEProvider) => {
  const localUserAccountProvider = {
    memory: new LocalUserAccountProvider({
      keystore: new LocalKeyStore(new LocalMemoryStore()),
      provider,
    }),
  };

  const dapi =
    typeof globalThis === "undefined" ? undefined : (globalThis as any).neoDapi;
  if (dapi !== undefined) {
    return {
      ...localUserAccountProvider,
      dapi: new DapiUserAccountProvider({
        dapi,
        provider,
        onError: (error) => {
          throw error;
        },
      }),
    };
  }

  return localUserAccountProvider;
};

const isLocalUserAccountProvider = (
  userAccountProvider: any
): userAccountProvider is LocalUserAccountProvider =>
  userAccountProvider instanceof LocalUserAccountProvider;

export const createClient = <
  TUserAccountProviders extends UserAccountProviders<
    any
  > = DefaultUserAccountProviders
>(
  getUserAccountProvidersOrHost: (
    provider: NEOONEProvider
  ) => TUserAccountProviders = getDefaultUserAccountProviders as any
): Client<
  TUserAccountProviders extends UserAccountProviders<infer TUserAccountProvider>
    ? TUserAccountProvider
    : any,
  TUserAccountProviders
> => {
  let getUserAccountProviders = getDefaultUserAccountProviders;
  if (getUserAccountProvidersOrHost != undefined) {
    getUserAccountProviders = getUserAccountProvidersOrHost as any;
  }

  const providers = [
    { network: "testnet", rpcURL: "https://testnet.neotracker.io/rpc" },
    { network: "priv", rpcURL: "http://localhost:9040/rpc" },
  ];

  const provider = new NEOONEProvider(providers);
  const userAccountProviders = getUserAccountProviders(provider);

  const localUserAccountProviders = Object.values(userAccountProviders).filter(
    isLocalUserAccountProvider
  ) as LocalUserAccountProvider[];

  const localUserAccountProvider = localUserAccountProviders.find(
    (userAccountProvider) =>
      userAccountProvider.keystore instanceof LocalKeyStore
  );

  if (localUserAccountProvider !== undefined) {
    const localKeyStore = localUserAccountProvider.keystore;
    if (localKeyStore instanceof LocalKeyStore) {
      Promise.all([
        localKeyStore.addUserAccount({
          network: "priv",
          privateKey: "L4qhHtwbiAMu1nrSmsTP5a3dJbxA3SNS6oheKnKd8E7KTJyCLcUv",
        }),
      ]).catch(() => {
        // do nothing
      });
    }
  }

  return new Client(userAccountProviders as any);
};

export const createDeveloperClients = (
  host = "localhost"
): DeveloperClients => ({
  local: new DeveloperClient(
    new NEOONEDataProvider({
      network: "local",
      rpcURL: `http://${host}:9040/rpc`,
    })
  ),
});
