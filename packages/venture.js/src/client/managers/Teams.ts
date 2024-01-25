import type {
    ListTeamsProps,
    ListTeamsReturnType,
    GetTeamProps,
    ValidGetTeamProps,
    AnyTeam,
    CreateTeamProps,
    DeleteTeamProps,
    DeleteTeamReturnType,
    GetTeamReturnType
} from '../../types/api/team';

import { BaseManager } from './Base';

import Routes from '../../routes';
import axios from 'axios';

export class TeamsManager extends BaseManager {
    /**
     * Get information for the Team specified by the `teamId` parameter.
     */
    public async get(props: { teamId: string } & GetTeamProps): Promise<AnyTeam>;
    public async get(props: { slug: string } & GetTeamProps): Promise<AnyTeam>;
    public async get(props?: ValidGetTeamProps): Promise<ListTeamsReturnType>;

    public async get<T extends ValidGetTeamProps>(
        props?: T
    ): Promise<GetTeamReturnType<T>> {
        const team = await axios.get(Routes.TEAMS.GET(props), {
            headers: {
                Authorization: this.client.token
            }
        });

        return team.data;
    }

    /**
     * Get a paginated list of all the Teams the authenticated User is a member of.
     */
    public async list(props?: ListTeamsProps): Promise<ListTeamsReturnType> {
        const teams = await axios.get(Routes.TEAMS.LIST(props), {
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
    public async create(props: CreateTeamProps) {
        const team = await axios.post(Routes.TEAMS.CREATE(), props, {
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
    public async delete(props: DeleteTeamProps): Promise<DeleteTeamReturnType> {
        const team = await axios.delete(Routes.TEAMS.DELETE(props), {
            headers: {
                Authorization: this.client.token
            },
            data: {
                reasons: props.reasons
            }
        });

        return team.data;
    }
}
