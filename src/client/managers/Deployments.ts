import { BaseManager } from './Base';
import type { ListDeploymentsParams, DeploymentData } from '../../types';

import Routes from '../../routes';
import axios from 'axios';

export class DeploymentsManager extends BaseManager {
  /**
   * List deployments under the authenticated user or team.
   * If a deployment hasn't finished uploading (is incomplete), the `url` property will have a value of `null`.
   * @see https://vercel.com/docs/rest-api/endpoints#list-deployments
   */
  public async list(params?: ListDeploymentsParams): Promise<DeploymentData> {
    const deployments = await axios.get(Routes.DEPLOYMENTS.LIST(params), {
      headers: {
        Authorization: this.client.token
      }
    });

    return deployments.data;
  }
}
