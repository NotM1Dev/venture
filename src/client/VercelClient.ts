import { UserManager } from './managers/User';
import { TeamsManager } from './managers/Teams';
import { DeploymentsManager } from './managers/Deployments';
import { AliasesManager } from './managers/Aliases';
import { DomainsManager } from './managers/Domains';
import { ProjectsManager } from './managers/Projects';

export class VercelClient {
  #token: string;
  #rawToken: string;

  public user = new UserManager(this);
  public teams = new TeamsManager(this);
  public deployments = new DeploymentsManager(this);
  public projects = new ProjectsManager(this);
  public domains = new DomainsManager(this);
  public aliases = new AliasesManager(this);

  /**
   * Creates a new instance of the class.
   * @param token - The Vercel access token to use.
   * @see https://vercel.com/docs/rest-api#authentication
   */
  public constructor(token: string) {
    if (!token || typeof token != 'string') {
      throw new Error('Invalid token provided');
    }

    this.#token = `Bearer ${token}`;
    this.#rawToken = token;
  }

  /**
   * The current token with the `Bearer` prefix.
   * @example Bearer <TOKEN>
   */
  public get token(): string {
    return this.#token;
  }

  /**
   * Update the client's token.
   */
  public set token(newToken: string) {
    this.#rawToken = newToken;
    this.#token = `Bearer ${newToken}`;
  }

  /**
   * The current token without the `Bearer` prefix.
   * @example <TOKEN>
   */
  public get rawToken(): string {
    return this.#rawToken;
  }
}
