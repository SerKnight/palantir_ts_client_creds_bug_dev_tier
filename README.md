# Foundry OAuth Client Credentials Test

Reproduction Steps for OAuth Client Credentials Issue
`Error: Captured stack trace for error: Failed to get token: unauthorized_client`

### Reproduction Steps

- Dev Tier Foundry account
- OSDK app with Confidential client setup
- Client ID & Client Secret from Foundry

1. Clone repository
2. Update `.npmrc` with your instance details
3. export foundry token
4. swap `"@personal-site/sdk": "^0.1.0",` with your own foundry SDK
5. swap index.ts `EmailSubscriptions` with your object name
6. Install dependencies

```
npm install
```

7. Create a `.env.local` file with:

```
FOUNDRY_CLIENT_ID=your_client_id
FOUNDRY_CLIENT_SECRET=your_client_secret
FOUNDRY_URL=https://your-dev-instance.usw-3.palantirfoundry.com
```

8. Run the app:

```
npm start
```

This should log all the inputs required in the docs and fail to fetch your object

### Error Reproduction

The app attempts to use the Confidential client OAuth flow but fails with:

```
Error: Failed to get token: unauthorized_client
```

User error or something on dev tier still not working for `Confidential Client` / client_credentials OAuth flow?
