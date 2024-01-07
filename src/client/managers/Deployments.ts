import { BaseManager } from './Base';
import type {
  ListDeploymentsParams,
  DeploymentData,
  CreateDeploymentParams,
  CreateDeploymentData
} from '../../types';

import Routes from '../../routes';
import axios from 'axios';

export class DeploymentsManager extends BaseManager {
  /**
   * Create a new deployment with all the required and intended data.
   * If the deployment is not a git deployment, all files must be provided with
   * the request, either referenced or inlined. Additionally, a deployment id
   * can be specified to redeploy a previous deployment.
   * @see https://vercel.com/docs/rest-api/endpoints#create-a-new-deployment
   */
  public async create(params: CreateDeploymentParams): Promise<CreateDeploymentData> {
    const deployment = await axios.post(Routes.DEPLOYMENTS.CREATE(params), params, {
      headers: {
        Authorization: this.client.token
      }
    });

    return deployment.data;
  }

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
