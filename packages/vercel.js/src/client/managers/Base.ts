import type { VercelClient } from '../VercelClient';

export class BaseManager {
  public client: VercelClient;

  public constructor(client: VercelClient) {
    if (!client) {
      throw new Error('No Vercel client provided');
    }

    this.client = client;
  }
}
