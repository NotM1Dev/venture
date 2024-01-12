import { BaseManager } from './Base';

import type {
  DomainAvailableData,
  DomainAvailableParams,
  DomainPriceParams,
  DomainPriceData
} from '../../index';

import Routes from '../../routes';
import axios from 'axios';

export class DomainsManager extends BaseManager {
  /**
   * Check if a domain name is available for purchase.
   * @see https://vercel.com/docs/rest-api/endpoints#check-a-domain-availability
   */
  public async isAvailable(params: DomainAvailableParams): Promise<DomainAvailableData> {
    const status = await axios.get(Routes.DOMAINS.AVAILABLE(params), {
      headers: {
        Authorization: this.client.token
      }
    });

    return status.data;
  }

  /**
   * Check the price to purchase a domain and how long a single purchase period is.
   * @see https://vercel.com/docs/rest-api/endpoints#check-the-price-for-a-domain
   */
  public async price(params: DomainPriceParams): Promise<DomainPriceData> {
    const price = await axios.get(Routes.DOMAINS.PRICE(params), {
      headers: {
        Authorization: this.client.token
      }
    });

    return price.data;
  }
}
