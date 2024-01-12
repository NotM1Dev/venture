import type {
  ListTeamsParams,
  ListTeamData,
  GetTeamParams,
  ValidGetTeamParams,
  AnyTeam,
  CreateTeamParams,
  DeleteTeamParams,
  DeleteTeamData,
  GetTeamReturnType
} from '../../types/api/team';

import { BaseManager } from './Base';

import Routes from '../../routes';
import axios from 'axios';

export class TeamsManager extends BaseManager {
  /**
   * Get information for the Team specified by the `teamId` parameter.
   */
  public async get(params: { teamId: string } & GetTeamParams): Promise<AnyTeam>;
  public async get(params: { slug: string } & GetTeamParams): Promise<AnyTeam>;
  public async get(params?: ValidGetTeamParams): Promise<ListTeamData>;

  public async get<T extends ValidGetTeamParams>(params?: T): Promise<GetTeamReturnType<T>> {
    const team = await axios.get(Routes.TEAMS.GET(params), {
      headers: {
        Authorization: this.client.token
      }
    });

    return team.data;
  }

  /**
   * Get a paginated list of all the Teams the authenticated User is a member of.
   */
  public async list(params?: ListTeamsParams): Promise<ListTeamData> {
    const teams = await axios.get(Routes.TEAMS.LIST(params), {
      headers: {
        Authorization: this.client.token
      }
    });

    return teams.data;
  }

  /**
   * Create a new Team under your account.
   * You need to provide the desired Team slug, and optionally the Team name.
   */
  public async create(params: CreateTeamParams) {
    const team = await axios.post(Routes.TEAMS.CREATE(), params, {
      headers: {
        Authorization: this.client.token
      }
    });

    return team;
  }

  /**
   * Delete a team under your account. You need to provide the desired team `id`.
   * An optional array of reasons for deletion may also be sent.
   */
  public async delete(params: DeleteTeamParams): Promise<DeleteTeamData> {
    const team = await axios.delete(Routes.TEAMS.DELETE(params), {
      headers: {
        Authorization: this.client.token
      },
      data: {
        reasons: params.reasons
      }
    });

    return team.data;
  }
}
