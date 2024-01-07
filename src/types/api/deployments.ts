import type {
  NodeVersion,
  Pagination,
  DeploymentState,
  Framework,
  DeploymentSubstate,
  Plan
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

export interface CreateDeploymentParams {
  /**
   * Forces a new deployment even if there is a previous similar deployment
   */
  forceNew?: 0 | 1;

  /**
   * Allows to skip framework detection so the
   * API would not fail to ask for confirmation
   */
  skipAutoDetectionConfirmation?: 0 | 1;

  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string;

  /**
   * A string with the project name used in the deployment URL
   * @example my-instant-deployment
   */
  name: string;

  /**
   * An deployment id for an existing deployment to redeploy
   */
  deploymentId?: string;

  /**
   * A list of objects with the files to be deployed
   */
  files?: (
    | {
        /**
         * The file path relative to the project root
         * @example folder/file.js
         */
        file: string;

        /**
         * The file contents hashed with SHA1, used to check the integrity
         */
        sha?: string;

        /**
         * The file size in bytes
         */
        size?: number;
      }
    | {
        /**
         * The file content, it could be either a `base64` (useful for images, etc.)
         * of the files or the plain content for source code
         */
        data: string;

        /**
         * The file name including the whole path
         * @example folder/file.js
         */
        file: string;

        /**
         * The file content encoding, it could be either a `base64` (useful for images, etc.)
         * of the files or the plain text for source code.
         */
        encoding: 'base64' | 'utf-8';
      }
  )[];

  /**
   * Populates initial git metadata for different git providers.
   */
  gitMetadata?: {
    /**
     * The name of the author of the commit
     * @example kyliau
     */
    commitAuthorName?: string;

    /**
     * The commit message
     * @example add method to measure Interaction to Next Paint (INP) (#36490)
     */
    commitMessage?: string;

    /**
     * The branch on which the commit was made
     */
    commitRef?: string;

    /**
     * The hash of the commit
     * @example dc36199b2234c6586ebe05ec94078a895c707e29
     */
    commitSha?: string;

    /**
     * Whether or not there have been modifications to
     * the working tree since the latest commit
     * @example true
     */
    dirty?: boolean;

    /**
     * The git repository's remote origin url
     * @example "https://github.com/vercel/next.js"
     */
    remoteUrl?: string;
  };

  /**
   * Defines the Git Repository source to be deployed.
   * This property can not be used in combination with files.
   */
  gitSource?:
    | {
        owner: string;
        ref: string;
        slug: string;
        type: 'bitbucket';
        sha?: string;
      }
    | {
        ref: string;
        repoUuid: string;
        type: 'bitbucket';
        sha?: string;
        workspaceUuid?: string;
      }
    | {
        projectId: number | string;
        ref: string;
        type: 'gitlab';
        sha?: string;
      }
    | {
        org: string;
        ref: string;
        repo: string;
        type: 'github';
        sha?: string;
      }
    | {
        ref: string;
        repoId: number | string;
        type: 'github';
        sha?: string;
      };

  /**
   * An object containing the deployment's metadata.
   * Multiple key-value pairs can be attached to a deployment
   */
  meta?: Record<string, any>;

  /**
   * The monorepo manager that is being used for this deployment.
   * When `null` is used no monorepo manager is selected
   */
  monorepoManager?: string | null;

  /**
   * The target project identifier in which the deployment will be created.
   * When defined, this parameter overrides name
   * @example my-deployment-project
   */
  project?: string;

  /**
   * Project settings that will be applied to the deployment.
   * It is required for the first deployment of a project and
   * will be saved for any following deployments
   */
  projectSettings?: {
    /**
     * The build command for this project.
     * When `null` is used this value will be automatically detected
     */
    buildCommand?: string | null;

    commandForIgnoringBuildStep: string | null;

    /**
     * The dev command for this project.
     * When `null` is used this value will be automatically detected
     */
    devCommand?: string | null;

    /**
     * The framework that is being used for this project.
     * When `null` is used no framework is selected
     */
    framework?: Framework | null;

    /**
     * The install command for this project.
     * When `null` is used this value will be automatically detected
     */
    installCommand?: string | null;

    /**
     * The output directory of the project.
     * When `null` is used this value will be automatically detected
     */
    outputDirectory?: string | null;

    /**
     * The name of a directory or relative path to the source code of your project.
     * When `null` is used it will default to the project root
     */
    rootDirectory?: string | null;

    /**
     * The region to deploy Serverless Functions in this project
     */
    serverlessFunctionRegion?: string | null;

    /**
     * Opts-out of the message prompting a CLI user
     * to connect a Git repository in `vercel link`.
     * @deprecated
     */
    skipGitConnectDuringLink?: boolean;

    /**
     * Indicates if there are source files outside
     * of the root directory, typically used for monorepos
     */
    sourceFilesOutsideRootDirectory?: boolean;
  };

  /**
   * Either not defined, `staging`, or `production`.
   * If `staging`, a staging alias in the format `<project>-<team>.vercel.app`
   * will be assigned. If `production`, any aliases defined in `alias` will be assigned.
   * If omitted, the target will be `preview`
   */
  target?: 'staging' | 'production';

  /**
   * When `true` and `deploymentId` is passed in, the sha from the previous deployment's
   * `gitSource` is removed forcing the latest commit to be used.
   */
  withLatestCommit?: boolean;
}

export interface CreateDeploymenData {
  build: {
    /**
     * The keys of the environment variables that were assigned during the build phase.
     */
    env: string[];
  };

  builds?: { [key: string]: unknown }[];

  /**
   * The flag saying if Vercel Connect configuration is used for builds
   */
  connectBuildsEnabled?: boolean;

  /**
   * The ID of Vercel Connect configuration used for this deployment
   */
  connectConfigurationId?: string;

  /**
   * The region where the deployment was first created
   */
  createdIn: string;

  /**
   * The keys of the environment variables that were assigned during runtime
   */
  env: string[];

  /**
   * An object used to configure your Serverless Functions
   */
  functions?: {
    [key: string]: {
      memory?: number;
      maxDuration?: number;
      runtime?: string;
      includeFiles?: string;
      excludeFiles?: string;
    };
  } | null;

  /**
   * Vercel URL to inspect the deployment.
   */
  inspectorUrl: string | null;

  /**
   * Is the deployment currently queued waiting for a Concurrent Build Slot to be available
   */
  isInConcurrentBuildsQueue: boolean;

  /**
   * An object containing the deployment's metadata
   */
  meta: { [key: string]: string };

  /**
   * An monorepo manager that was used for the deployment
   */
  monorepoManager?: string | null;

  /**
   * The name of the project associated with the deployment at the time that the deployment was created
   */
  name: string;

  /**
   * The unique ID of the user or team the deployment belongs to
   */
  ownerId: string;

  /**
   * The connect configuration ID used to deploy passive lambdas into for secure compute enabled deployments.
   */
  passiveConnectConfigurationId?: string;

  /**
   * The pricing plan the deployment was made under
   */
  plan: Plan;

  /**
   * The ID of the project the deployment is associated with
   */
  projectId: string;

  /**
   * A list of routes objects used to rewrite paths to point towards other internal or external paths
   */
  routes:
    | (
        | {
            src: string;
            dest?: string;
            headers?: { [key: string]: string };
            methods?: string[];
            continue?: boolean;
            override?: boolean;
            caseSensitive?: boolean;
            check?: boolean;
            important?: boolean;
            status?: number;
            has?: (
              | {
                  type: 'host';
                  value: string;
                }
              | {
                  type: 'header' | 'cookie' | 'query';
                  key: string;
                  value?: string;
                }
            )[];
            missing?: (
              | {
                  type: 'host';
                  value: string;
                }
              | {
                  type: 'header' | 'cookie' | 'query';
                  key: string;
                  value?: string;
                }
            )[];
            locale?: {
              redirect?: { [key: string]: string };
              cookie?: string;
            };
            /**
             * A middleware key within the `output` key under the build result.
             * Overrides a `middleware` definition.
             */
            middlewarePath?: string;

            /**
             * The original middleware matchers.
             */
            middlewareRawSrc?: string[];

            /**
             * A middleware index in the `middleware` key under the build result
             */
            middleware?: number;
          }
        | {
            handle: 'error' | 'filesystem' | 'hit' | 'miss' | 'rewrite' | 'resource';
            src?: string;
            dest?: string;
            status?: number;
          }
        | {
            src: string;
            continue: boolean;
            middleware: 0;
          }
      )[]
    | null;
  gitRepo?:
    | (
        | {
            namespace: string;
            projectId: number;
            type: 'gitlab';
            url: string;
            path: string;
            defaultBranch: string;
            name: string;
            private: boolean;
            ownerType: 'team' | 'user';
          }
        | {
            org: string;
            repo: string;
            repoId: number;
            type: 'github';
            repoOwnerId: string;
            path: string;
            defaultBranch: string;
            name: string;
            private: boolean;
            ownerType: 'team' | 'user';
          }
        | {
            owner: string;
            repoUuid: string;
            slug: string;
            type: 'bitbucket';
            workspaceUuid: string;
            path: string;
            defaultBranch: string;
            name: string;
            private: boolean;
            ownerType: 'team' | 'user';
          }
      )
    | null;
  aliasAssignedAt?: (number | boolean) | null;
  lambdas?: {
    id: string;
    createdAt?: number;
    entrypoint?: string | null;
    readyState?: 'BUILDING' | 'ERROR' | 'INITIALIZING' | 'READY';
    readyStateAt?: number;
    output: {
      path: string;
      functionName: string;
    }[];
  }[];
  /**
   * A boolean representing if the deployment is public or not. By default this is `false`
   */
  public: boolean;

  /**
   * The state of the deployment depending on the process of deploying, or if it is ready or in an error state
   */
  readyState: DeploymentState;

  /**
   * The substate of the deployment when the state is "READY"
   */
  readySubstate?: DeploymentSubstate;

  /**
   * The regions the deployment exists in
   */
  regions: string[];

  /**
   * Where was the deployment created from
   */
  source?: 'api-trigger-git-deploy' | 'cli' | 'clone/repo' | 'git' | 'import' | 'import/repo';

  /**
   * If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned
   */
  target?: ('staging' | 'production') | null;

  /**
   * The team that owns the deployment if any
   */
  team?: {
    /**
     * The ID of the team owner
     */
    id: string;

    /**
     * The name of the team owner
     */
    name: string;

    /**
     * The slug of the team owner
     */
    slug: string;
  };

  type: 'LAMBDAS';

  /**
   * A string with the unique URL of the deployment
   */
  url: string;

  /**
   * An array of domains that were provided by the user when creating the Deployment.
   */
  userAliases?: string[];

  /**
   * The platform version that was used to create the deployment.
   */
  version: 2;

  /**
   * Whether or not preview comments are enabled for the deployment
   */
  previewCommentsEnabled?: boolean;

  /**
   * A list of all the aliases (default aliases, staging aliases and production aliases)
   * that were assigned upon deployment creation
   */
  alias: string[];

  /**
   * A boolean that will be true when the aliases from the
   * alias property were assigned successfully
   */
  aliasAssigned: boolean;

  /**
   * An object that will contain a `code` and a `message` when the aliasing fails,
   * otherwise the value will be `null`
   */
  aliasError?: {
    code: string;
    message: string;
  } | null;
  aliasFinal?: string | null;
  aliasWarning?: {
    code: string;
    message: string;
    link?: string;
    action?: string;
  } | null;
  autoAssignCustomDomains?: boolean;
  automaticAliases?: string[];
  bootedAt: number;
  buildErrorAt?: number;
  buildingAt: number;
  canceledAt?: number;
  checksState?: 'registered' | 'running' | 'completed';
  checksConclusion?: 'succeeded' | 'failed' | 'skipped' | 'canceled';

  /**
   * A number containing the date when the deployment was created in milliseconds
   */
  createdAt: number;

  /**
   * Information about the deployment creator
   */
  creator: {
    /**
     * The ID of the user that created the deployment
     */
    uid: string;

    /**
     * The username of the user that created the deployment
     */
    username?: string;
  };
  errorCode?: string;
  errorLink?: string;
  errorMessage?: string | null;
  errorStep?: string;
  passiveRegions?: string[];
  gitSource?:
    | {
        type: 'github';
        repoId: string | number;
        ref?: string | null;
        sha?: string;
        prId?: number | null;
      }
    | {
        type: 'github';
        org: string;
        repo: string;
        ref?: string | null;
        sha?: string;
        prId?: number | null;
      }
    | {
        type: 'gitlab';
        projectId: string | number;
        ref?: string | null;
        sha?: string;
        prId?: number | null;
      }
    | {
        type: 'bitbucket';
        workspaceUuid?: string;
        repoUuid: string;
        ref?: string | null;
        sha?: string;
        prId?: number | null;
      }
    | {
        type: 'bitbucket';
        owner: string;
        slug: string;
        ref?: string | null;
        sha?: string;
        prId?: number | null;
      }
    | {
        type: 'custom';
        ref: string;
        sha: string;
        gitUrl: string;
      }
    | {
        type: 'github';
        ref: string;
        sha: string;
        repoId: number;
        org?: string;
        repo?: string;
      }
    | {
        type: 'gitlab';
        ref: string;
        sha: string;
        projectId: number;
      }
    | {
        type: 'bitbucket';
        ref: string;
        sha: string;
        owner?: string;
        slug?: string;
        workspaceUuid: string;
        repoUuid: string;
      };

  /**
   * A string holding the unique ID of the deployment
   */
  id: string;
}
