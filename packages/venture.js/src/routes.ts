import type {
    AssignAliasProps,
    DeleteAliasProps,
    DeleteTeamProps,
    DomainAvailableProps,
    DomainPriceProps,
    GetAliasProps,
    GetTeamProps,
    ListDeploymentsProps,
    ListTeamsProps,
    ListUserEventsProps,
    CreateProjectProps,
    DeleteProjectProps,
    CreateDeploymentProps
} from './types';

type Props = Record<string, any>;

/**
 * Vercel API Endpoints.
 * @see https://vercel.com/docs/rest-api/endpoints
 */
const Routes = {
    ALIASES: {
        ASSIGN(props: Pick<AssignAliasProps, 'id'>) {
            if (!props.id) {
                throw new Error('Deployment ID must be provided');
            }

            return `https://api.vercel.com/v2/deployments/${props.id}/aliases`;
        },

        DELETE(props: DeleteAliasProps) {
            if (!props.aliasId) {
                throw new Error('Alias ID must be provided');
            }

            return `https://api.vercel.com/v2/aliases/${props.aliasId}/${props.teamId || ''}${
                props.teamId ? `?teamId=${props.teamId}` : ''
            }`;
        },

        GET(props: GetAliasProps) {
            if (!props.idOrAlias) {
                throw new Error('Alias or Alias ID must be provided');
            }

            const query = new URLSearchParams(props as Props).toString();
            return `https://api.vercel.com/v4/aliases/${props.idOrAlias}${query && `?${query}`}`;
        }
    },

    DEPLOYMENTS: {
        CREATE(
            props: Pick<
                CreateDeploymentProps,
                'forceNew' | 'skipAutoDetectionConfirmation' | 'teamId'
            >
        ) {
            const query = new URLSearchParams(props as Props).toString();
            return `https://api.vercel.com/v13/deployments${query && `?${query}`}`;
        },

        LIST(props?: ListDeploymentsProps) {
            const query = new URLSearchParams(props as Props).toString();
            return `https://api.vercel.com/v6/deployments${query && `?${query}`}`;
        }
    },

    DOMAINS: {
        AVAILABLE(props: DomainAvailableProps) {
            if (!props.name) {
                throw new Error('Domain name must be provided');
            }

            const query = new URLSearchParams(props as Props).toString();
            return `https://api.vercel.com/v4/domains/status${query && `?${query}`}`;
        },

        PRICE(props: DomainPriceProps) {
            if (!props.name) {
                throw new Error('Domain name must be provided');
            }

            const query = new URLSearchParams(props as Props).toString();
            return `https://api.vercel.com/v4/domains/price${query && `?${query}`}`;
        }
    },

    PROJECTS: {
        CREATE(props: CreateProjectProps) {
            return `https://api.vercel.com/v9/projects${props.teamId ? `?teamId=${props.teamId}` : ''}`;
        },

        DELETE(props: DeleteProjectProps) {
            if (!props.idOrName) {
                throw new Error('Project ID or name must be provided');
            }

            return `https://api.vercel.com/v9/projects/${props.idOrName}${
                props.teamId ? `?teamId=${props.teamId}` : ''
            }`;
        }
    },

    TEAMS: {
        CREATE() {
            return 'https://api.vercel.com/v1/teams';
        },

        DELETE(props: Omit<DeleteTeamProps, 'reasons'>) {
            if (!props.teamId) {
                throw new Error('Team ID must be provided');
            }

            const withNewDefaultTeamId = `?newDefaultTeamId=${props.newDefaultTeamId}`;

            return `https://api.vercel.com/v1/teams/${props.teamId}${
                props.newDefaultTeamId ? withNewDefaultTeamId : ''
            }`;
        },

        GET(props?: GetTeamProps) {
            let url = `https://api.vercel.com/v2/teams/${props?.teamId || ''}`;

            if (props?.slug) {
                url += `?slug=${props.slug}`;
            }

            return url;
        },

        LIST(props?: ListTeamsProps) {
            const query = new URLSearchParams(props as Props).toString();
            return `https://api.vercel.com/v2/teams${query && `?${query}`}`;
        }
    },

    USER: {
        DELETE() {
            return 'https://api.vercel.com/v1/user';
        },

        GET() {
            return 'https://api.vercel.com/v2/user';
        },

        LIST_EVENTS(props?: ListUserEventsProps) {
            const query = new URLSearchParams(props as Props).toString();
            return `https://api.vercel.com/v3/events${query && `?${query}`}`;
        }
    }
};

export default Routes;
