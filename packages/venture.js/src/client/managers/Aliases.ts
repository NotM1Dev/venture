import type {
  AssignAliasProps,
  AssignAliasReturnType,
  DeleteAliasProps,
  DeleteAliasReturnType,
  GetAliasProps,
  GetAliasReturnType
} from '../../index';

import { BaseManager } from './Base';

import Routes from '../../routes';
import axios from 'axios';

export class AliasesManager extends BaseManager {
  /**
   * Creates a new alias for the deployment with the given deployment ID.
   * The authenticated user or team must own this deployment.
   * If the desired alias is already assigned to another deployment,
   * then it will be removed from the old deployment and assigned to the new one.
   * @see https://vercel.com/docs/rest-api/endpoints#assign-an-alias
   */
  public async assign(props: AssignAliasProps): Promise<AssignAliasReturnType> {
    const alias = await axios.post(
      Routes.ALIASES.ASSIGN(props),
      {
        alias: props.alias,
        redirect: props.redirect
      },
      {
        headers: {
          Authorization: this.client.token
        },
        params: {
          teamId: props.teamId
        }
      }
    );

    return alias.data;
  }

  /**
   * Delete an Alias with the specified ID.
   * @see https://vercel.com/docs/rest-api/endpoints#delete-an-alias
   */
  public async delete(props: DeleteAliasProps): Promise<DeleteAliasReturnType> {
    const alias = await axios.delete(Routes.ALIASES.DELETE(props), {
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
  public async get(props: GetAliasProps): Promise<GetAliasReturnType> {
    const alias = await axios.get(Routes.ALIASES.GET(props), {
      headers: {
        Authorization: this.client.token
      }
    });

    return alias.data;
  }
}
