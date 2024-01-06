import type {
  NodeVersion,
  Pagination,
  DeploymentState,
  Framework,
  DeploymentSubstate
} from '../common';

export interface ListDeploymentsParams {
  /**
   * Name of the deployment.
   * @example docs
   */
  app?: string;

  /**
   * Gets the deployment created after this Date timestamp. (default: current time)
   * @example 1612948664566
   * @deprecated
   */
  from?: number;

  /**
   * Maximum number of deployments to list from a request.
   * @example 10
   */
  limit?: number;

  /**
   * Filter deployments from the given `projectId`.
   * @example QmXGTs7mvAMMC7WW5ebrM33qKG32QK3h4vmQMjmY
   */
  projectId?: string;

  /**
   * Filter deployments based on their rollback candidacy
   */
  rollbackCandidate?: boolean;

  /**
   * Get Deployments created after this JavaScript timestamp.
   * @example 1540095775941
   */
  since?: number;

  /**
   * Filter deployments based on their state (`BUILDING`, `ERROR`, `INITIALIZING`, `QUEUED`, `READY`, `CANCELED`)
   */
  state?: DeploymentState[];

  /**
   * Filter deployments based on the environment.
   * @example production
   */
  target?: 'production' | 'preview';

  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string;

  /**
   * Gets the deployment created before this Date timestamp. (default: current time)
   * @example 1612948664566
   * @deprecated
   */
  to?: number;

  /**
   * Get Deployments created before this JavaScript timestamp.
   * @example 1540095775951
   */
  until?: number;

  /**
   * Filter out deployments based on users who have created the deployment.
   */
  users?: string[];
}

export interface DeploymentData {
  deployments: {
    uid: string;

    /**
     * The name of the deployment.
     */
    name: string;
    /**
     * The URL of the deployment.
     */
    url: string;

    /**
     * Timestamp of when the deployment got created.
     */
    created: number;

    /**
     * The source of the deployment.
     */
    source?: 'api-trigger-git-deploy' | 'cli' | 'clone/repo' | 'git' | 'import' | 'import/repo';

    /**
     * In which state is the deployment.
     */
    state?: DeploymentState;

    /**
     * In which state is the deployment.
     */
    readyState?: DeploymentSubstate;

    /**
     * The type of the deployment.
     */
    type: 'LAMBDAS';

    /**
     * Metadata information of the user who created the deployment.
     */
    creator: {
      /**
       * The unique identifier of the user.
       */
      uid: string;

      /**
       * The email address of the user.
       */
      email?: string;

      /**
       * The username of the user.
       */
      username?: string;

      /**
       * The GitHub login of the user.
       */
      githubLogin?: string;

      /**
       * The GitLab login of the user.
       */
      gitlabLogin?: string;
    };

    /**
     * Metadata information from the Git provider.
     */
    meta?: { [key: string]: string };

    /**
     * On which environment has the deployment been deployed to.
     */
    target?: ('production' | 'staging') | null;

    /**
     * An error object in case aliasing of the deployment failed.
     */
    aliasError?: {
      code: string;
      message: string;
    } | null;
    aliasAssigned?: (number | boolean) | null;

    /**
     * Timestamp of when the deployment got created.
     */
    createdAt?: number;

    /**
     * Timestamp of when the deployment started building at.
     */
    buildingAt?: number;

    /**
     * Timestamp of when the deployment got ready.
     */
    ready?: number;

    /**
     * Since June 2023 Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - PROMOTED: has seen production traffic
     */
    readySubstate?: 'STAGED' | 'PROMOTED';

    /**
     * State of all registered checks
     */
    checksState?: 'registered' | 'running' | 'completed';

    /**
     * Conclusion for checks
     */
    checksConclusion?: 'succeeded' | 'failed' | 'skipped' | 'canceled';

    /**
     * Vercel URL to inspect the deployment.
     */
    inspectorUrl: string | null;

    /**
     * Deployment can be used for instant rollback
     */
    isRollbackCandidate?: boolean | null;

    /**
     * The project settings which was used for this deployment
     */
    projectSettings?: {
      framework?: Framework | null;
      gitForkProtection?: boolean;
      customerSupportCodeVisibility?: boolean;
      gitLFS?: boolean;
      devCommand?: string | null;
      installCommand?: string | null;
      buildCommand?: string | null;
      nodeVersion?: NodeVersion;
      outputDirectory?: string | null;
      publicSource?: boolean | null;
      rootDirectory?: string | null;
      serverlessFunctionRegion?: string | null;
      sourceFilesOutsideRootDirectory?: boolean;
      commandForIgnoringBuildStep?: string | null;
      createdAt?: number;
      speedInsights?: {
        id: string;
        enabledAt?: number;
        disabledAt?: number;
        canceledAt?: number;
        hasData?: boolean;
        paidAt?: number;
      };
      webAnalytics?: {
        id: string;
        disabledAt?: number;
        canceledAt?: number;
        enabledAt?: number;
        hasData?: boolean;
      };
      skipGitConnectDuringLink?: boolean;
      gitComments?: {
        /**
         * Whether the Vercel bot should comment on PRs
         */
        onPullRequest: boolean;

        /**
         * Whether the Vercel bot should comment on commits
         */
        onCommit: boolean;
      };
    };
    /**
     * The flag saying if Vercel Connect configuration is used for builds
     */
    connectBuildsEnabled?: boolean;

    /**
     * The ID of Vercel Connect configuration used for this deployment
     */
    connectConfigurationId?: string;

    /**
     * The ID of Vercel Connect configuration used for this deployment's passive functions
     */
    passiveConnectConfigurationId?: string;
  }[];
  pagination: Pagination;
}
