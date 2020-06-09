### How To Start

```
yarn install
```

in another terminal start a private node:
```
yarn neo-one start network
```

Run our deployment:
```
yarn neo-one deploy --network priv
```

Test invoking the `mintToken` function:
```
yarn ts-node src/doTransfer.ts
```

I tried to emulate the `neo-one` configuration layout that sahmie had, with a `smart-contract` folder and an `index.ts` as the equivalent for their `contract-entry.js`. `smart-contract/codegen/client.ts` was also slightly edited to be less verbose in its configuration settings than normal.

You can rerun deployments by stopping the node, deleting the `.neo-one/` folder, and also clearing out the generated `artifacts` in `smart-contract/artifacts`.
