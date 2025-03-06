# OAuth Hello World

A simple TS app that shows failure reproduction for `Confidential client` Grant type failure for Dev Tier Foundry instances

## Prerequisites

- Node.js (v18+)
- npm
- A valid Palantir client ID and client secret & Dev Instance

## Setup

1. Clone this repository

Change contents of the `.npmprc`
```
//CHANGE_INSTANCE.usw-3.palantirfoundry.com/artifacts/api/repositories/ri.artifacts.main.repository.ffc2627b-6e01-46f2-bb30-54df38816f93/contents/release/npm/:_authToken=${FOUNDRY_TOKEN}
@CHANGE_INSTANCE:registry=https://CHANGE_INSTANCE.usw-3.palantirfoundry.com/artifacts/api/repositories/ri.artifacts.main.repository.ffc2627b-6e01-46f2-bb30-54df38816f93/contents/release/npm
```

Install your respective SDK on a dev tier, setup with a Confidential Client.

2. Install dependencies:
   ```
   npm install
   ```
3. Configure environment variables:
   - Copy `.env.local` and replace with your credentials:
   ```
   CLIENT_ID=<YOUR_CLIENT_ID>
   CLIENT_SECRET=<YOUR_CLIENT_SECRET>
   URL=YOUR_FOUNDRY_STACK_URL
   ```

```
$ npm install

$ npm start

 $ npm start

> oauth-hello-world@1.0.0 start
> npm run build && node dist/index.js


> oauth-hello-world@1.0.0 build
> tsc

[Function: clientFn]
Hello World! Starting OAuth client application...
Error fetching EmailSubscriptions: Error: Captured stack trace for error: Failed to get token: unauthorized_client
    at fetchWrapper (/Users/christopherknight/code/palantir/foundry_oauth_client_creds_test/node_modules/@osdk/shared.client.impl/build/cjs/index.cjs:21:202)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async apiFetch (/Users/christopherknight/code/palantir/foundry_oauth_client_creds_test/node_modules/@osdk/client/build/cjs/chunk-FEUFIE6T.cjs:51:20)
    at async foundryPlatformFetch (/Users/christopherknight/code/palantir/foundry_oauth_client_creds_test/node_modules/@osdk/client/build/cjs/chunk-FEUFIE6T.cjs:26:10)
    at async fetchObjectPage (/Users/christopherknight/code/palantir/foundry_oauth_client_creds_test/node_modules/@osdk/client/build/cjs/chunk-FEUFIE6T.cjs:428:13)
    at async fetchPageInternal (/Users/christopherknight/code/palantir/foundry_oauth_client_creds_test/node_modules/@osdk/client/build/cjs/chunk-FEUFIE6T.cjs:387:12)
    at async fetchObjects (/Users/christopherknight/code/palantir/foundry_oauth_client_creds_test/dist/index.js:57:22) {
  cause: Error: Failed to get token: unauthorized_client
      at throwIfError (/Users/christopherknight/code/palantir/foundry_oauth_client_creds_test/node_modules/@osdk/oauth/build/cjs/index.cjs:940:11)
      at _signIn (/Users/christopherknight/code/palantir/foundry_oauth_client_creds_test/node_modules/@osdk/oauth/build/cjs/index.cjs:1091:36)
      at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
      at async signIn (/Users/christopherknight/code/palantir/foundry_oauth_client_creds_test/node_modules/@osdk/oauth/build/cjs/index.cjs:1034:14)
      at async getToken2 (/Users/christopherknight/code/palantir/foundry_oauth_client_creds_test/node_modules/@osdk/oauth/build/cjs/index.cjs:1049:15)
      at async /Users/christopherknight/code/palantir/foundry_oauth_client_creds_test/node_modules/@osdk/shared.client.impl/build/cjs/index.cjs:12:19
      at async headerMutatedFetch (/Users/christopherknight/code/palantir/foundry_oauth_client_creds_test/node_modules/@osdk/shared.net.fetch/build/cjs/index.cjs:20:16)
      at async fetchWrapper (/Users/christopherknight/code/palantir/foundry_oauth_client_creds_test/node_modules/@osdk/shared.client.impl/build/cjs/index.cjs:19:14)
      at async apiFetch (/Users/christopherknight/code/palantir/foundry_oauth_client_creds_test/node_modules/@osdk/client/build/cjs/chunk-FEUFIE6T.cjs:51:20)
      at async foundryPlatformFetch (/Users/christopherknight/code/palantir/foundry_oauth_client_creds_test/node_modules/@osdk/client/build/cjs/chunk-FEUFIE6T.cjs:26:10)
}

```