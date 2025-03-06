import { Client, createClient, Osdk } from "@osdk/client";
import { createConfidentialOauthClient } from "@osdk/oauth";
import { $ontologyRid, EmailSubscriptions } from "@personal-site/sdk";
// need to change this to your own SDK and an Ontology Object on a dev tier, setup
import * as dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const client_id: string = process.env.FOUNDRY_CLIENT_ID || '';
const url: string = process.env.FOUNDRY_URL || '';
const ontologyRid: string = $ontologyRid;
const client_secret: string = process.env.FOUNDRY_CLIENT_SECRET || '';

console.log('Configuration:', {
  client_id,
  url,
  ontologyRid,
  client_secret: client_secret.substring(0, 5) + '...'
});

const auth = createConfidentialOauthClient(client_id, client_secret, url);
const client: Client = createClient(url, ontologyRid, auth);

export async function fetchObjects(): Promise<Osdk.Instance<EmailSubscriptions>[]> {
    const objects = (await client(EmailSubscriptions).fetchPage({ $pageSize: 10 }));
    return objects.data;
}

fetchObjects()
    .then((objects: Osdk.Instance<EmailSubscriptions>[]) => {
        console.log("Successfully fetched EmailSubscriptions:");
        console.log(objects);
    })
    .catch(error => {
        console.error("Error fetching EmailSubscriptions:", error);
    }); 