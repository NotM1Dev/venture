import type {
  AssignAliasParams,
  AssignAliasData,
  DeleteAliasParams,
  DeleteAliasData,
  GetAliasParams,
  GetAliasData
} from '../../index';

import { BaseManager } from './Base';

import Routes from '../../routes';
import axios, { type AxiosRequestConfig } from 'axios';

export class AliasesManager extends BaseManager {
  /**
   * Creates a new alias for the deployment with the given deployment ID.
   * The authenticated user or team must own this deployment.
   * If the desired alias is already assigned to another deployment,
   * then it will be removed from the old deployment and assigned to the new one.
   * @see https://vercel.com/docs/rest-api/endpoints#assign-an-alias
   */
  public async assign(params: AssignAliasParams) {
    const alias = await axios.post(
      Routes.ALIASES.ASSIGN(params),
      {
        alias: params.alias,
        redirect: params.redirect
      },
      {
        headers: {
          Authorization: this.client.token
        },
        params: {
          teamId: params.teamId
        }
      }
    );

    return alias.data as AssignAliasData;
  }

  /**
   * Delete an Alias with the specified ID.
   * @see https://vercel.com/docs/rest-api/endpoints#delete-an-alias
   */
  public async delete(params: DeleteAliasParams): Promise<DeleteAliasData> {
    const alias = await axios.delete(Routes.ALIASES.DELETE(params), {
      headers: {
        Authorization: this.client.token
      }
    });

    return alias.data;
  }

  /**
   * Retrieves an Alias for the given host name or alias ID.
   * @see https://vercel.com/docs/rest-api/endpoints#get-an-alias
   */
  public async get(params: GetAliasParams): Promise<GetAliasData> {
    const alias = await axios.get(Routes.ALIASES.GET(params), {
      headers: {
        Authorization: this.client.token
      }
    });

    return alias.data;
  }
}
