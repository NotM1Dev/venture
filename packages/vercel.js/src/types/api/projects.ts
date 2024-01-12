import type {
  Framework,
  ACLAction,
  DeploymentState,
  DeploymentSubstate,
  Plan,
  ChecksConclusion,
  ChecksState,
  JobStatus
} from '../index';

export interface CreateProjectEnvironmentVariable {
  /**
   * The git branch of the environment variable
   */
  gitBranch?: string;

  /**
   * Name of the ENV variable
   */
  key: string;

  /**
   * Deployment Target or Targets in which the ENV variable will be used
   */
  target: any[];

  /**
   * Type of the ENV variable
   */
  type?: 'system' | 'secret' | 'encrypted' | 'plain';

  /**
   * Value for the ENV variable
   */
  value: string;
}

export interface CreateProjectGitRepository {
  /**
   * The name of the git repository.
   * @example vercel/next.js
   */
  repo: string;

  /**
   * The Git Provider of the repository
   */
  type: 'github' | 'gitlab' | 'bitbucket';
}

export interface CreateProjectParams {
  /**
   * The desired name for the project
   */
  name: string;

  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string;

  /**
   * The build command for this project.
   * When `null` is used this value will be automatically detected
   */
  buildCommand?: string | null;

  commandForIgnoringBuildStep?: string | null;

  /**
   * The dev command for this project.
   * When `null` is used this value will be automatically detected
   */
  devCommand?: string;

  /**
   * Collection of ENV Variables the Project will use
   */
  environmentVariables?: CreateProjectEnvironmentVariable[];

  /**
   * The framework that is being used for this project.
   * When `null` is used no framework is selected
   */
  framework?: Framework | null;

  /**
   * The Git Repository that will be connected to the project.
   * When this is defined, any pushes to the specified connected
   * Git Repository will be automatically deployed
   */
  gitRepository?: CreateProjectGitRepository;

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
   * Specifies whether the source code and logs of the
   * deployments for this project should be public or not
   */
  publicSource?: boolean | null;

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
   * to connect a Git repository in vercel link.
   * @deprecated
   */
  skipGitConnectDuringLink?: boolean;
}

export interface CreateProjectData {
  accountId: string;
  analytics?: {
    id: string;
    canceledAt?: number | null;
    disabledAt: number;
    enabledAt: number;
    paidAt?: number;
    sampleRatePercent?: number | null;
    spendLimitInDollars?: number | null;
  };
  speedInsights?: {
    id: string;
    enabledAt?: number;
    disabledAt?: number;
    canceledAt?: number;
    hasData?: boolean;
    paidAt?: number;
  };
  autoExposeSystemEnvs?: boolean;
  autoAssignCustomDomains?: boolean;
  autoAssignCustomDomainsUpdatedBy?: string;
  buildCommand?: string | null;
  commandForIgnoringBuildStep?: string | null;
  connectConfigurationId?: string | null;
  connectBuildsEnabled?: boolean;
  createdAt?: number;
  customerSupportCodeVisibility?: boolean;
  crons?: {
    /**
     * The time the feature was enabled for this project. Note: It enables automatically with the first Deployment that outputs cronjobs.
     */
    enabledAt: number;

    /**
     * The time the feature was disabled for this project.
     */
    disabledAt: number | null;

    updatedAt: number;

    /**
     * The ID of the Deployment from which the definitions originated.
     */
    deploymentId: string | null;

    definitions: {
      /**
       * The hostname that should be used.
       */
      host: string;

      /**
       * The path that should be called for the cronjob.
       */
      path: string;

      /**
       * The cron expression.
       */
      schedule: string;
    }[];
  };
  dataCache?: {
    userDisabled: boolean;
    storageSizeBytes?: number | null;
    unlimited?: boolean;
  };
  devCommand?: string | null;
  directoryListing: boolean;
  installCommand?: string | null;
  env?: {
    target?:
      | ('production' | 'preview' | 'development' | 'preview' | 'development')[]
      | ('production' | 'preview' | 'development' | 'preview' | 'development');
    type: 'system' | 'secret' | 'encrypted' | 'plain' | 'sensitive';
    id?: string;
    key: string;
    value: string;
    configurationId?: string | null;
    createdAt?: number;
    updatedAt?: number;
    createdBy?: string | null;
    updatedBy?: string | null;
    gitBranch?: string;
    edgeConfigId?: string | null;
    edgeConfigTokenId?: string | null;
    contentHint?:
      | (
          | {
              type: 'redis-url';
              storeId: string;
            }
          | {
              type: 'redis-rest-api-url';
              storeId: string;
            }
          | {
              type: 'redis-rest-api-token';
              storeId: string;
            }
          | {
              type: 'redis-rest-api-read-only-token';
              storeId: string;
            }
          | {
              type: 'blob-read-write-token';
              storeId: string;
            }
          | {
              type: 'postgres-url';
              storeId: string;
            }
          | {
              type: 'postgres-url-non-pooling';
              storeId: string;
            }
          | {
              type: 'postgres-prisma-url';
              storeId: string;
            }
          | {
              type: 'postgres-user';
              storeId: string;
            }
          | {
              type: 'postgres-host';
              storeId: string;
            }
          | {
              type: 'postgres-password';
              storeId: string;
            }
          | {
              type: 'postgres-database';
              storeId: string;
            }
          | { [key: string]: unknown }
        )
      | null;

    /**
     * Whether `value` is decrypted.
     */
    decrypted?: boolean;

    comment?: string;
  }[];
  framework?: Framework | null;
  gitForkProtection?: boolean;
  gitLFS?: boolean;
  id: string;
  latestDeployments?: {
    alias?: string[];
    aliasAssigned?: (number | boolean) | null;
    aliasError?: {
      code: string;
      message: string;
    } | null;
    aliasFinal?: string | null;
    automaticAliases?: string[];
    builds?: {
      use: string;
      src?: string;
      dest?: string;
    }[];
    connectBuildsEnabled?: boolean;
    connectConfigurationId?: string;
    createdAt: number;
    createdIn: string;
    creator: {
      email: string;
      githubLogin?: string;
      gitlabLogin?: string;
      uid: string;
      username: string;
    } | null;
    deploymentHostname: string;
    name: string;
    forced?: boolean;
    id: string;
    meta?: { [key: string]: string };
    monorepoManager?: string | null;
    plan: Plan;
    private: boolean;
    readyState: DeploymentState;
    readySubstate?: DeploymentSubstate;
    requestedAt?: number;
    target?: string | null;
    teamId?: string | null;
    type: 'LAMBDAS';
    url: string;
    userId: string;
    withCache?: boolean;
    checksConclusion?: ChecksConclusion;
    checksState?: ChecksState;
    readyAt?: number;
    buildingAt?: number;

    /**
     * Whether or not preview comments are enabled for the deployment
     */
    previewCommentsEnabled?: boolean;
  }[];
  link?:
    | {
        org?: string;
        repo?: string;
        repoId?: number;
        type?: 'github';
        createdAt?: number;
        deployHooks: {
          createdAt?: number;
          id: string;
          name: string;
          ref: string;
          url: string;
        }[];
        gitCredentialId?: string;
        updatedAt?: number;
        sourceless?: boolean;
        productionBranch?: string;
      }
    | {
        projectId?: string;
        projectName?: string;
        projectNameWithNamespace?: string;
        projectNamespace?: string;
        projectUrl?: string;
        type?: 'gitlab';
        createdAt?: number;
        deployHooks: {
          createdAt?: number;
          id: string;
          name: string;
          ref: string;
          url: string;
        }[];
        gitCredentialId?: string;
        updatedAt?: number;
        sourceless?: boolean;
        productionBranch?: string;
      }
    | {
        name?: string;
        slug?: string;
        owner?: string;
        type?: 'bitbucket';
        uuid?: string;
        workspaceUuid?: string;
        createdAt?: number;
        deployHooks: {
          createdAt?: number;
          id: string;
          name: string;
          ref: string;
          url: string;
        }[];
        gitCredentialId?: string;
        updatedAt?: number;
        sourceless?: boolean;
        productionBranch?: string;
      };
  name: string;
  nodeVersion: '20.x' | '18.x' | '16.x' | '14.x' | '12.x' | '10.x' | '8.10.x';
  outputDirectory?: string | null;
  passiveConnectConfigurationId?: string | null;
  passwordProtection?: { [key: string]: unknown } | null;
  productionDeploymentsFastLane?: boolean;
  publicSource?: boolean | null;
  rootDirectory?: string | null;
  serverlessFunctionRegion?: string | null;
  skipGitConnectDuringLink?: boolean;
  sourceFilesOutsideRootDirectory?: boolean;
  ssoProtection?: {
    deploymentType: 'all' | 'preview' | 'prod_deployment_urls_and_all_previews';
  } | null;
  targets?: {
    [key: string]: {
      alias?: string[];
      aliasAssigned?: (number | boolean) | null;
      aliasError?: {
        code: string;
        message: string;
      } | null;
      aliasFinal?: string | null;
      automaticAliases?: string[];
      builds?: {
        use: string;
        src?: string;
        dest?: string;
      }[];
      connectBuildsEnabled?: boolean;
      connectConfigurationId?: string;
      createdAt: number;
      createdIn: string;
      creator: {
        email: string;
        githubLogin?: string;
        gitlabLogin?: string;
        uid: string;
        username: string;
      } | null;
      deploymentHostname: string;
      name: string;
      forced?: boolean;
      id: string;
      meta?: { [key: string]: string };
      monorepoManager?: string | null;
      plan: Plan;
      private: boolean;
      readyState: DeploymentState;
      readySubstate?: DeploymentSubstate;
      requestedAt?: number;
      target?: string | null;
      teamId?: string | null;
      type: 'LAMBDAS';
      url: string;
      userId: string;
      withCache?: boolean;
      checksConclusion?: ChecksConclusion;
      checksState?: ChecksState;
      readyAt?: number;
      buildingAt?: number;
      /** Whether or not preview comments are enabled for the deployment */
      previewCommentsEnabled?: boolean;
    } | null;
  };
  transferCompletedAt?: number;
  transferStartedAt?: number;
  transferToAccountId?: string;
  transferredFromAccountId?: string;
  updatedAt?: number;
  live?: boolean;
  enablePreviewFeedback?: boolean | null;
  permissions?: {
    accessGroup?: ACLAction[];
    aliasGlobal?: ACLAction[];
    analyticsSampling?: ACLAction[];
    analyticsUsage?: ACLAction[];
    auditLog?: ACLAction[];
    billingAddress?: ACLAction[];
    billingInformation?: ACLAction[];
    billingInvoice?: ACLAction[];
    billingInvoiceEmailRecipient?: ACLAction[];
    billingInvoiceLanguage?: ACLAction[];
    billingPlan?: ACLAction[];
    billingPurchaseOrder?: ACLAction[];
    billingTaxId?: ACLAction[];
    blob?: ACLAction[];
    budget?: ACLAction[];
    cacheArtifact?: ACLAction[];
    cacheArtifactUsageEvent?: ACLAction[];
    concurrentBuilds?: ACLAction[];
    connect?: ACLAction[];
    connectConfiguration?: ACLAction[];
    domain?: ACLAction[];
    domainAcceptDelegation?: ACLAction[];
    domainAuthCodes?: ACLAction[];
    domainCertificate?: ACLAction[];
    domainCheckConfig?: ACLAction[];
    domainMove?: ACLAction[];
    domainPurchase?: ACLAction[];
    domainRecord?: ACLAction[];
    domainTransferIn?: ACLAction[];
    event?: ACLAction[];
    ownEvent?: ACLAction[];
    sensitiveEnvironmentVariablePolicy?: ACLAction[];
    fileUpload?: ACLAction[];
    gitRepository?: ACLAction[];
    ipBlocking?: ACLAction[];
    integration?: ACLAction[];
    integrationConfiguration?: ACLAction[];
    integrationConfigurationTransfer?: ACLAction[];
    integrationConfigurationProjects?: ACLAction[];
    integrationVercelConfigurationOverride?: ACLAction[];
    jobGlobal?: ACLAction[];
    logDrain?: ACLAction[];
    Monitoring?: ACLAction[];
    monitoringQuery?: ACLAction[];
    monitoringChart?: ACLAction[];
    monitoringAlert?: ACLAction[];
    notificationDeploymentFailed?: ACLAction[];
    notificationDomainConfiguration?: ACLAction[];
    notificationDomainExpire?: ACLAction[];
    notificationDomainMoved?: ACLAction[];
    notificationDomainPurchase?: ACLAction[];
    notificationDomainRenewal?: ACLAction[];
    notificationDomainTransfer?: ACLAction[];
    notificationDomainUnverified?: ACLAction[];
    NotificationMonitoringAlert?: ACLAction[];
    notificationPaymentFailed?: ACLAction[];
    notificationUsageAlert?: ACLAction[];
    notificationCustomerBudget?: ACLAction[];
    openTelemetryEndpoint?: ACLAction[];
    paymentMethod?: ACLAction[];
    permissions?: ACLAction[];
    postgres?: ACLAction[];
    previewDeploymentSuffix?: ACLAction[];
    proTrialOnboarding?: ACLAction[];
    seawallConfig?: ACLAction[];
    sharedEnvVars?: ACLAction[];
    sharedEnvVarsProduction?: ACLAction[];
    space?: ACLAction[];
    spaceRun?: ACLAction[];
    storageIntegration?: ACLAction[];
    passwordProtectionInvoiceItem?: ACLAction[];
    rateLimit?: ACLAction[];
    redis?: ACLAction[];
    remoteCaching?: ACLAction[];
    samlConfig?: ACLAction[];
    secret?: ACLAction[];
    redisStoreTokenSet?: ACLAction[];
    blobStoreTokenSet?: ACLAction[];
    postgresStoreTokenSet?: ACLAction[];
    integrationStoreTokenSet?: ACLAction[];
    supportCase?: ACLAction[];
    supportCaseComment?: ACLAction[];
    dataCacheBillingSettings?: ACLAction[];
    team?: ACLAction[];
    teamAccessRequest?: ACLAction[];
    teamFellowMembership?: ACLAction[];
    teamInvite?: ACLAction[];
    teamInviteCode?: ACLAction[];
    teamJoin?: ACLAction[];
    teamOwnMembership?: ACLAction[];
    teamOwnMembershipDisconnectSAML?: ACLAction[];
    token?: ACLAction[];
    usage?: ACLAction[];
    usageCycle?: ACLAction[];
    user?: ACLAction[];
    userConnection?: ACLAction[];
    webAnalyticsPlan?: ACLAction[];
    webAuthn?: ACLAction[];
    edgeConfig?: ACLAction[];
    edgeConfigItem?: ACLAction[];
    edgeConfigSchema?: ACLAction[];
    edgeConfigToken?: ACLAction[];
    webhook?: ACLAction[];
    'webhook-event'?: ACLAction[];
    endpointVerification?: ACLAction[];
    projectTransferIn?: ACLAction[];
    aliasProject?: ACLAction[];
    aliasProtectionBypass?: ACLAction[];
    productionAliasProtectionBypass?: ACLAction[];
    connectConfigurationLink?: ACLAction[];
    dataCacheNamespace?: ACLAction[];
    deployment?: ACLAction[];
    deploymentCheck?: ACLAction[];
    deploymentCheckPreview?: ACLAction[];
    deploymentCheckReRunFromProductionBranch?: ACLAction[];
    deploymentProductionGit?: ACLAction[];
    deploymentPreview?: ACLAction[];
    deploymentPrivate?: ACLAction[];
    deploymentPromote?: ACLAction[];
    deploymentRollback?: ACLAction[];
    logs?: ACLAction[];
    logsPreset?: ACLAction[];
    passwordProtection?: ACLAction[];
    job?: ACLAction[];
    project?: ACLAction[];
    projectAnalyticsSampling?: ACLAction[];
    projectDeploymentHook?: ACLAction[];
    projectDomain?: ACLAction[];
    projectDomainMove?: ACLAction[];
    projectDomainCheckConfig?: ACLAction[];
    projectEnvVars?: ACLAction[];
    projectEnvVarsProduction?: ACLAction[];
    projectEnvVarsUnownedByIntegration?: ACLAction[];
    projectId?: ACLAction[];
    projectIntegrationConfiguration?: ACLAction[];
    projectLink?: ACLAction[];
    projectMember?: ACLAction[];
    projectMonitoring?: ACLAction[];
    projectPermissions?: ACLAction[];
    projectProductionBranch?: ACLAction[];
    projectTransfer?: ACLAction[];
    projectTransferOut?: ACLAction[];
    projectProtectionBypass?: ACLAction[];
    projectUsage?: ACLAction[];
    projectAnalyticsUsage?: ACLAction[];
    projectSupportCase?: ACLAction[];
    projectSupportCaseComment?: ACLAction[];
    analytics?: ACLAction[];
    trustedIps?: ACLAction[];
    webAnalytics?: ACLAction[];
    sharedEnvVarConnection?: ACLAction[];
  };
  lastRollbackTarget?: { [key: string]: unknown } | null;
  lastAliasRequest?: {
    fromDeploymentId: string;
    toDeploymentId: string;
    jobStatus: JobStatus;
    requestedAt: number;
    type: 'promote' | 'rollback';
  } | null;
  hasFloatingAliases?: boolean;
  protectionBypass?: {
    [key: string]: {
      createdAt: number;
      createdBy: string;
      scope: 'automation-bypass';
    };
  };
  hasActiveBranches?: boolean;
  trustedIps?:
    | (
        | {
            deploymentType: 'all' | 'preview' | 'prod_deployment_urls_and_all_previews' | 'production';
            addresses: {
              value: string;
              note?: string;
            }[];
            protectionMode: 'additional' | 'exclusive';
          }
        | {
            deploymentType: 'all' | 'preview' | 'prod_deployment_urls_and_all_previews' | 'production';
          }
      )
    | null;
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
  paused?: boolean;
  concurrencyBucketName?: string;
}

export interface DeleteProjectParams {
  /**
   * The unique project identifier or the project name
   * @example prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB
   */
  idOrName: string;

  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string;
}

export interface DeleteProjectData {}
