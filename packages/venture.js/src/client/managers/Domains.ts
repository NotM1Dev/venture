import { BaseManager } from './Base';

import type {
  DomainAvailableReturnType,
  DomainAvailableProps,
  DomainPriceProps,
  DomainPriceReturnType
} from '../../index';

import Routes from '../../routes';
import axios from 'axios';

export class DomainsManager extends BaseManager {
  /**
   * Check if a domain name is available for purchase.
   * @see https://vercel.com/docs/rest-api/endpoints#check-a-domain-availability
   */
  public async isAvailable(props: DomainAvailableProps): Promise<DomainAvailableReturnType> {
    const status = await axios.get(Routes.DOMAINS.AVAILABLE(props), {
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
  public async price(props: DomainPriceProps): Promise<DomainPriceReturnType> {
    const price = await axios.get(Routes.DOMAINS.PRICE(props), {
      headers: {
        Authorization: this.client.token
      }
    });

    return price.data;
  }
}
