import { AliasesManager } from './managers/Aliases';
import { DeploymentsManager } from './managers/Deployments';
import { DomainsManager } from './managers/Domains';
import { ProjectsManager } from './managers/Projects';
import { TeamsManager } from './managers/Teams';
import { UserManager } from './managers/User';

export class VercelClient {
  #token: string;
  #rawToken: string;

  public aliases = new AliasesManager(this);
  public deployments = new DeploymentsManager(this);
  public domains = new DomainsManager(this);
  public projects = new ProjectsManager(this);
  public teams = new TeamsManager(this);
  public user = new UserManager(this);

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
