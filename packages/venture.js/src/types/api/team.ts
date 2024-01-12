import type { Pagination } from '../index';

export interface ListTeamsProps {
  /**
   * Maximum number of Teams which may be returned.
   * @example 20
   */
  limit?: number;

  /**
   * Timestamp (in milliseconds) to only include Teams created since then.
   * @example 1540095775951
   */
  since?: number;

  /**
   * Timestamp (in milliseconds) to only include Teams created until then.
   * @example 1540095775951
   */
  until?: number;
}

/**
 * Data representing a Team.
 */
export interface Team {
  [key: string]: unknown;
}

/**
 * A limited form of data representing a Team, due to the authentication token missing privileges to read the full Team data.
 */
export interface TeamLimited {
  /**
   * Property indicating that this Team data contains only limited information,
   * due to the authentication token missing privileges to read the full Team data.
   * Re-login with the Team's configured SAML Single Sign-On provider in order
   * to upgrade the authentication token with the necessary privileges.
   */
  limited: boolean;

  /**
   * When "Single Sign-On (SAML)" is configured, this object contains information
   * that allows the client-side to identify whether or not this Team has SAML enforced.
   */
  saml?: {
    /**
     * Information for the SAML Single Sign-On configuration.
     */
    connection?: {
      /**
       * The Identity Provider "type", for example Okta.
       */
      type: string;

      /**
       * Current status of the connection.
       */
      status: string;

      /**
       * Current state of the connection.
       */
      state: string;

      /**
       * Timestamp (in milliseconds) of when the configuration was connected.
       */
      connectedAt: number;

      /**
       * Timestamp (in milliseconds) of when the last webhook event was received from WorkOS.
       */
      lastReceivedWebhookEvent?: number;
    };

    /**
     * Information for the SAML Single Sign-On configuration.
     */
    directory?: {
      /**
       * The Identity Provider "type", for example Okta.
       */
      type: string;

      /**
       * Current status of the connection.
       */
      status: string;

      /**
       * Current state of the connection.
       */
      state: string;

      /**
       * Timestamp (in milliseconds) of when the configuration was connected.
       */
      connectedAt: number;

      /**
       * Timestamp (in milliseconds) of when the last webhook event was received from WorkOS.
       */
      lastReceivedWebhookEvent?: number;
    };

    /**
     * When `true`, interactions with the Team **must** be done with an authentication
     * token that has been authenticated with the Team's SAML Single Sign-On provider.
     */
    enforced: boolean;
  };

  /**
   * The Team's unique identifier.
   */
  id: string;

  /**
   * The Team's slug, which is unique across the Vercel platform.
   */
  slug: string;

  /**
   * Name associated with the Team account, or `null` if none has been provided.
   */
  name: string | null;

  /**
   * The ID of the file used as avatar for this Team.
   */
  avatar: string | null;
  membership:
    | {
        confirmed: boolean;
        confirmedAt: number;
        accessRequestedAt?: number;
        role: 'OWNER' | 'MEMBER' | 'DEVELOPER' | 'BILLING' | 'VIEWER' | 'CONTRIBUTOR';
        teamId?: string;
        uid: string;
        createdAt: number;
        created: number;
        joinedFrom?: {
          origin:
            | 'link'
            | 'saml'
            | 'mail'
            | 'import'
            | 'teams'
            | 'github'
            | 'gitlab'
            | 'bitbucket'
            | 'dsync'
            | 'feedback'
            | 'organization-teams';
          commitId?: string;
          repoId?: string;
          repoPath?: string;
          gitUserId?: string | number;
          gitUserLogin?: string;
          ssoUserId?: string;
          ssoConnectedAt?: number;
          idpUserId?: string;
          dsyncUserId?: string;
          dsyncConnectedAt?: number;
        };
      }
    | {
        confirmed: boolean;
        confirmedAt?: number;
        accessRequestedAt: number;
        role: 'OWNER' | 'MEMBER' | 'DEVELOPER' | 'BILLING' | 'VIEWER' | 'CONTRIBUTOR';
        teamId?: string;
        uid: string;
        createdAt: number;
        created: number;
        joinedFrom?: {
          origin:
            | 'link'
            | 'saml'
            | 'mail'
            | 'import'
            | 'teams'
            | 'github'
            | 'gitlab'
            | 'bitbucket'
            | 'dsync'
            | 'feedback'
            | 'organization-teams';
          commitId?: string;
          repoId?: string;
          repoPath?: string;
          gitUserId?: string | number;
          gitUserLogin?: string;
          ssoUserId?: string;
          ssoConnectedAt?: number;
          idpUserId?: string;
          dsyncUserId?: string;
          dsyncConnectedAt?: number;
        };
      };

  /**
   * Will remain undocumented. Remove in v3 API.
   */
  created: string;

  /**
   * UNIX timestamp (in milliseconds) when the Team was created.
   */
  createdAt: number;
}

export type AnyTeam = Team | TeamLimited;

export interface ListTeamReturnType {
  teams: AnyTeam[];
  pagination: Pagination;
}

export interface GetTeamProps {
  slug?: string;

  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string;
}

export type ValidGetTeamProps = { teamId: string } | { slug: string };

export type GetTeamReturnType<T extends GetTeamProps> = T extends {}
  ? T['teamId'] extends string
    ? AnyTeam
    : T['slug'] extends string
      ? AnyTeam
      : ListTeamReturnType
  : ListTeamReturnType;

export interface CreateTeamProps {
  /**
   * The desired slug for the Team
   * @example a-random-team
   */
  slug: string;

  /**
   * The desired name for the Team.
   * It will be generated from the provided slug if nothing is provided
   * @example A Random Team
   */
  name?: string;
}

export interface DeleteTeamProps {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId: string;

  /**
   * Id of the team to be set as the new default team
   * @example team_LLHUOMOoDlqOp8wPE4kFo9pE
   */
  newDefaultTeamId?: string;

  /**
   * Optional array of objects that describe the reason why the team is being deleted.
   */
  reasons?: {
    /**
     * Description of the reason why the team is being deleted.
     */
    description: string;

    /**
     * Idenitifier slug of the reason why the team is being deleted.
     */
    slug: string;
  }[];
}

export interface DeleteTeamReturnType {
  /**
   * The ID of the deleted Team
   */
  id: string;

  /**
   * Signifies whether the default team update has failed,
   * when newDefaultTeamId is provided in request query.
   */
  newDefaultTeamIdError?: boolean;
}
