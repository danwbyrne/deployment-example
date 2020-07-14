import { LocalKeyStore, LocalMemoryStore, NEOONEProvider,  LocalUserAccountProvider } from '@neo-one/client-full';

const createUserAccountProviderFunc = (
  network: 'testnet' | 'local',
  rpcURL:string,
) => async () => {
  const keystore = new LocalKeyStore(new LocalMemoryStore());

  switch (network) {
    case 'testnet': {
      await keystore.addUserAccount({
          network: 'testnet',
          privateKey: 'L4sEvTq6RDL42XGoGRQJjhLwfZ4BbwiStks9zrbLuG7yF3dXdpBZ',
          name: "dan"
      });
      break;
    }
    case 'local': {
      await keystore.addUserAccount({
        network: "local",
        privateKey: "L4qhHtwbiAMu1nrSmsTP5a3dJbxA3SNS6oheKnKd8E7KTJyCLcUv",
        name: "master"
      });
      break;
    }
    default: {
      throw new Error('for ts');
    }
  }

  return new LocalUserAccountProvider({
      keystore,
      provider: new NEOONEProvider([{
          network,
          rpcURL
      }]),
  });
};

export const getCustomNetworks = () => ({
  testnet: {userAccountProvider: createUserAccountProviderFunc('testnet', 'https://testnet.neotracker.io/rpc')},
  local: {userAccountProvider: createUserAccountProviderFunc('local', 'http://localhost:9040/rpc')},
});