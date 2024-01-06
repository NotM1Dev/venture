export interface DomainAvailableParams {
  /**
   * The name of the domain for which we would like to check the status.
   * @example example.com
   */
  name: string;

  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string;
}

export interface DomainAvailableData {
  available: boolean;
}

export interface DomainPriceParams {
  /**
   * The name of the domain for which the price needs to be checked.
   * @example example.com
   */
  name: string;

  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string;

  /**
   * In which status of the domain the price needs to be checked.
   * @example new
   */
  type?: 'new' | 'renewal';
}

export interface DomainPriceData {
  /**
   * The domain price in USD.
   */
  price: number;

  /**
   * The number of years the domain could be held before paying again.
   */
  period: number;
}
