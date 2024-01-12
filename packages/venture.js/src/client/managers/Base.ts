import type { VentureClient } from '../VentureClient';

export class BaseManager {
  public client: VentureClient;

  public constructor(client: VentureClient) {
    if (!client) {
      throw new Error('No Vercel client provided');
    }

    this.client = client;
  }
}
